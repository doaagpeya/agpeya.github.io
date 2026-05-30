/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { 
  BookOpen, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  BookOpenCheck,
  Plus, 
  Minus, 
  RotateCcw, 
  Clock, 
  Compass, 
  Info, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Heart,
  ExternalLink,
  MessageSquare,
  BookmarkCheck,
  Check,
  MousePointerClick
} from "lucide-react";
import { agpeyaHours, otherPrayersData, corePrayers } from "./data";
import { PrayerHour } from "./types";

function getBibleLink(label: string): string | null {
  const cleanLabel = label.toLowerCase();
  if (!cleanLabel.includes("mazmur")) return null;

  // Find any number in the label to identify the Psalm
  const match = cleanLabel.match(/mazmur\s*(pertobatan\s*)?(\d+)/i);
  if (!match) return null;

  const num = parseInt(match[2], 10);

  // Default version we want is 306 (Terjemahan Baru / Indonesian)
  const baseUrl = "https://www.bible.com/bible/306/PSA.";

  // Handle differences between Agpeya (Septuagint/Koptik) numbering and Hebrew/Indonesian Protestant numbering:
  let finalNum = num;

  if (num === 50) {
    // Agpeya Psalm 50 is Hebrew/Indonesian Psalm 51
    finalNum = 51;
  } else if (num === 19) {
    // In terce list, Agpeya Psalm 19 is Hebrew Psalm 20
    // "Mazmur 19 - Nyanyian Syukur atas Kemenangan"
    if (cleanLabel.includes("kemenangan")) {
      finalNum = 20;
    }
  } else if (num === 22) {
    // "Mazmur 22 - Penggembalaan Agung" is Hebrew Psalm 23
    if (cleanLabel.includes("penggembalaan") || cleanLabel.includes("gembala")) {
      finalNum = 23;
    }
  } else if (num === 23) {
    // "Mazmur 23 - Raja Kemuliaan Masuk" is Hebrew Psalm 24
    if (cleanLabel.includes("kemuliaan") || cleanLabel.includes("masuk")) {
      finalNum = 24;
    }
  } else if (num === 90) {
    // "Mazmur 90 - Perlindungan di dalam Allah" in Compline is Hebrew Psalm 91
    if (cleanLabel.includes("perlindungan")) {
      finalNum = 91;
    }
  } else if (num === 118) {
    // "Mazmur 118 (Potongan) - Taurat yang Kudus" under midnight is Hebrew Psalm 119
    if (cleanLabel.includes("potongan") || cleanLabel.includes("taurat")) {
      finalNum = 119;
    }
  }

  return `${baseUrl}${finalNum}`;
}

export default function App() {
  // Navigation & Page State
  const [activeTab, setActiveTab ] = useState<string>("home");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [showCreditsAuthor, setShowCreditsAuthor] = useState<boolean>(false);
  
  // Customization State
  const [theme, setTheme] = useState<"light" | "sepia" | "dark">(() => {
    const saved = localStorage.getItem("agpeya_theme");
    return (saved as "light" | "sepia" | "dark") || "sepia";
  });
  const [fontSize, setFontSize] = useState<number>(() => {
    const saved = localStorage.getItem("agpeya_font_size");
    return saved ? Number(saved) : 105;
  });
  
  // Audio configuration state for Kyrie Counter
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);
  
  // Accordion State
  // Format: { 'prime_0': true, 'prime_1': false }
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "prime_0": true,
    "terce_0": true,
    "sext_0": true,
    "none_0": true,
    "vespers_0": true,
    "compline_0": true,
    "midnight_0": true,
    "veil_0": true,
  });

  // Kyrie Counter state (0 - 41)
  const [kyrieCount, setKyrieCount] = useState<number>(0);
  const [streakCount, setStreakCount] = useState<number>(() => {
    const saved = localStorage.getItem("agpeya_streak");
    return saved ? Number(saved) : 0;
  });

  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Time-based Hour recommendation
  const [currentHour, setCurrentHour] = useState<number>(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState<number>(new Date().getMinutes());

  // Save Settings to LocalStorage
  useEffect(() => {
    localStorage.setItem("agpeya_theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("agpeya_font_size", fontSize.toString());
  }, [fontSize]);

  // Keep track of real-time hours for Agpeya recommendations
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours());
      setCurrentMinute(now.getMinutes());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  // Soft program-generated Audio via Web Audio API
  const playSound = (freq: number, dur: number, type: "sine" | "triangle" | "sine" = "sine", gainVal: number = 0.04) => {
    if (!isAudioEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + dur);
    } catch (e) {
      console.log("Audio contexts pending interaction or disabled on browser.", e);
    }
  };

  const playClickSound = () => {
    // Soft high chime for clicking
    playSound(783.99, 0.15, "sine", 0.05); // G5 note
  };

  const playCompletionChime = () => {
    // Beautiful Gregorian-style chord
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = audioCtx.currentTime;
    // Chime notes: C5, E5, G5, C6 in sequence for rich harp chime
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, index) => {
      if (!isAudioEnabled) return;
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + index * 0.1);
        gain.gain.setValueAtTime(0.04, now + index * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.1 + 0.6);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + index * 0.1);
        osc.stop(now + index * 0.1 + 0.65);
      } catch (e) {}
    });
  };

  // Kyrie Counter increment
  const handleKyrieIncrement = () => {
    setKyrieCount(prev => {
      const next = prev + 1;
      if (next === 41) {
        // Celebratary sound
        playCompletionChime();
        // Give soft visual award
        return 41;
      } else if (next > 41) {
        playClickSound();
        return 1;
      } else {
        playClickSound();
        return next;
      }
    });
  };

  const handleKyrieReset = () => {
    setKyrieCount(0);
    playSound(440, 0.2, "sine", 0.03); // A4 note
  };

  // Get matching liturgical color settings based on active theme
  const getThemeStyles = () => {
    switch (theme) {
      case "light":
        return {
          bg: "bg-slate-50 text-slate-800",
          card: "bg-white border border-slate-200/80 shadow-xs",
          cardHeader: "bg-slate-100/60 border-b border-slate-200",
          liturgicalTitle: "text-[#8c2d19] font-serif font-bold",
          liturgicalCaption: "text-[#c28434] font-medium italic",
          liturgicalText: "text-[#8c2d19] font-semibold",
          navActive: "bg-rose-50 text-rose-900 border-l-4 border-rose-800 font-medium",
          btnAccent: "bg-rose-800 hover:bg-rose-900 text-white shadow-xs",
          btnSecondary: "bg-slate-200 hover:bg-slate-300 text-slate-700",
          accentLine: "border-rose-200",
          scrollIndicator: "bg-rose-100",
          badgeText: "bg-rose-100 border border-rose-200 text-rose-900",
          textAccent: "text-rose-800",
          textAccentMuted: "text-rose-900",
          borderAccentBold: "border-rose-800/20",
          borderAccentMuted: "border-rose-800/10",
          bgAccent: "bg-rose-800",
          bgAccentMuted: "bg-rose-800/10",
          bgAccentLight: "bg-rose-50",
          crossBg: "bg-rose-800",
          titleColor: "text-rose-800",
          indicatorBg: "bg-rose-800/10 text-rose-800 border border-rose-800/20",
          headerBg: "bg-white/95 border-slate-200",
          sidebarBg: "bg-white border-r border-slate-200"
        };
      case "dark":
        return {
          bg: "bg-[#0b0709] text-stone-200",
          card: "bg-[#140c10] border border-rose-950/40 shadow-xl",
          cardHeader: "bg-[#1c1218] border-b border-rose-950/50",
          liturgicalTitle: "text-rose-400 font-serif font-bold",
          liturgicalCaption: "text-rose-500/80 font-medium italic",
          liturgicalText: "text-rose-400 font-semibold",
          navActive: "bg-rose-950/30 text-rose-300 border-l-4 border-rose-600 font-medium",
          btnAccent: "bg-rose-900 hover:bg-rose-800 text-rose-100 border border-rose-800/80 shadow-md",
          btnSecondary: "bg-neutral-800 hover:bg-neutral-700 text-neutral-300",
          accentLine: "border-rose-950/60",
          scrollIndicator: "bg-rose-950/40",
          badgeText: "bg-rose-950/40 border border-rose-900/60 text-rose-300",
          textAccent: "text-rose-400",
          textAccentMuted: "text-rose-300",
          borderAccentBold: "border-rose-900/40",
          borderAccentMuted: "border-rose-950/40",
          bgAccent: "bg-rose-900",
          bgAccentMuted: "bg-rose-950/40",
          bgAccentLight: "bg-rose-950/30",
          crossBg: "bg-rose-900",
          titleColor: "text-rose-400",
          indicatorBg: "bg-rose-950/40 text-rose-300 border border-rose-900/40",
          headerBg: "bg-[#1c1218]/90 border-rose-950/60",
          sidebarBg: "bg-[#181014] border-r border-rose-950/60"
        };
      case "sepia": // Geometric Balance aesthetic
      default:
        return {
          bg: "bg-[#F9F7F2] text-[#2D2A26]",
          card: "bg-white border border-[#630D16]/10 shadow-md rounded-xl transition duration-300",
          cardHeader: "bg-[#630D16]/5 border-b border-[#630D16]/10",
          liturgicalTitle: "text-[#630D16] font-serif font-bold",
          liturgicalCaption: "text-[#C5A059] font-medium italic font-serif",
          liturgicalText: "text-[#630D16] font-semibold",
          navActive: "bg-[#C5A059]/10 text-[#630D16] border-l-4 border-[#C5A059] font-semibold",
          btnAccent: "bg-[#630D16] hover:bg-[#4d070e] text-white shadow-xs border border-[#C5A059]/20",
          btnSecondary: "bg-[#F9F7F2] hover:bg-[#FAF5EC] text-[#2D2A26] border border-[#630D16]/10",
          accentLine: "border-[#630D16]/10",
          scrollIndicator: "bg-[#C5A059]/40",
          badgeText: "bg-[#C5A059]/20 border border-[#C5A059]/60 text-[#630D16]",
          textAccent: "text-[#630D16]",
          textAccentMuted: "text-[#630D16]",
          borderAccentBold: "border-[#630D16]/20",
          borderAccentMuted: "border-[#630D16]/10",
          bgAccent: "bg-[#630D16]",
          bgAccentMuted: "bg-[#630D16]/10",
          bgAccentLight: "bg-[#C5A059]/10",
          crossBg: "bg-[#630D16]",
          titleColor: "text-[#630D16]",
          indicatorBg: "bg-[#630D16]/10 text-[#630D16] border border-[#630D16]/20",
          headerBg: "bg-[#F9F7F2]/95 border-[#630D16]/15",
          sidebarBg: "bg-[#F9F7F2] border-r border-[#630D16]/10"
        };
    }
  };

  const st = getThemeStyles();

  // Helper: toggle specific accordion section on current hour
  const toggleSection = (hourId: string, index: number) => {
    const key = `${hourId}_${index}`;
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Expand or collapse all sections for high accessibility (elderly readers)
  const toggleAllSections = (hour: PrayerHour, expand: boolean) => {
    const updated: Record<string, boolean> = { ...openSections };
    hour.sections.forEach((_, idx) => {
      updated[`${hour.id}_${idx}`] = expand;
    });
    setOpenSections(updated);
  };

  // Font size trigger
  const makeFontSmaller = () => {
    setFontSize(prev => Math.max(80, prev - 10));
  };

  const makeFontLarger = () => {
    setFontSize(prev => Math.min(220, prev + 10));
  };

  // Determine standard recommended canonical hour based on local time
  const getRecommendedHourId = () => {
    if (currentHour >= 5 && currentHour < 8) return "prime"; // Jam Pertama
    if (currentHour >= 8 && currentHour < 11) return "terce"; // Jam Ketiga
    if (currentHour >= 11 && currentHour < 14) return "sext"; // Jam Keenam
    if (currentHour >= 14 && currentHour < 16) return "none"; // Jam Kesembilan
    if (currentHour >= 16 && currentHour < 18) return "vespers"; // Jam Kesebelas
    if (currentHour >= 18 && currentHour < 21) return "compline"; // Jam Keduabelas
    if (currentHour >= 21 || currentHour < 5) return "midnight"; // Tengah Malam
    return "prime";
  };

  const recommendedHourId = getRecommendedHourId();
  const recommendedHourObj = agpeyaHours.find(h => h.id === recommendedHourId);

  // Return formatted current time string
  const getFormattedTime = () => {
    const hh = currentHour.toString().padStart(2, "0");
    const mm = currentMinute.toString().padStart(2, "0");
    return `${hh}:${mm}`;
  };

  // Simulate contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    // Increase user streak or pray count as reward
    setTimeout(() => {
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      setContactSubmitted(false);
      alert("Pesan Anda telah dikirim secara offline! Terima kasih atas saran rohani Anda.");
    }, 1500);
  };

  // Save prayer log to local device storage to celebrate devotion
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const finishPrayerSession = (hourId: string, title: string) => {
    setStreakCount(prev => {
      const next = prev + 1;
      localStorage.setItem("agpeya_streak", next.toString());
      return next;
    });
    setSessionCompleted(true);
    playCompletionChime();
    setTimeout(() => {
      setSessionCompleted(false);
      setActiveTab("home");
    }, 2800);
  };

  return (
    <div id="agpeya-app" className={`min-h-screen font-sans transition-colors duration-300 selection:bg-rose-300 selection:text-rose-900 ${st.bg}`}>
      
      {/* PERSISTENT HEADER BLOCK */}
      <header id="persistent-header" className={`sticky top-0 z-40 transition-colors duration-300 border-b ${st.headerBg} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Hamburg Button */}
          <div className="flex items-center space-x-3">
            <button 
              id="sidebar-toggle-btn"
              onClick={() => setSidebarOpen(true)}
              className="p-2 -ml-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              title="Menu Navigasi"
              aria-label="Open sidebar menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTab("home")}>
              {/* Liturgical Coptic Cross Styled SVG inside standard Circle */}
              <div className={`w-8 h-8 rounded-full ${st.crossBg} flex items-center justify-center text-white shadow-xs`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h1 className={`text-lg font-serif font-extrabold tracking-tight leading-none ${st.titleColor}`}>Agpeya</h1>
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">Koptik</span>
              </div>
            </div>
          </div>

          {" "}
          {/* Quick Stats & Controls for high-comfort devotion */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {" "}
            {/* Live Indicator of current recommended Indonesian hour */}
            <div id="live-hour-recommendation" className={`hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium ${st.indicatorBg}`}>
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              <span>Jam Lokal: <strong>{getFormattedTime()}</strong></span>
              <span className="opacity-40">|</span>
              <span>Rekomendasi: <strong className="underline decoration-dotted">{recommendedHourObj?.title}</strong></span>
            </div>

            {/* Streak count showing user dedication to custom routine */}
            {streakCount > 0 && (
              <div id="user-streak-badge" className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20" title="Rangkaian Doa berturut-turut Anda">
                <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500 animate-bounce" />
                <span>Streak: {streakCount}</span>
              </div>
            )}

            {/* Theme Selectors with nice interactive feedback */}
            <div id="theme-controls-block" className="flex items-center bg-black/5 dark:bg-white/5 p-1 rounded-lg space-x-1">
              <button 
                id="theme-btn-sepia"
                onClick={() => { setTheme("sepia"); playSound(523.25, 0.1, "sine"); }}
                className={`px-2 py-1 text-xs font-medium rounded-md transition ${theme === "sepia" ? "bg-[#630D16] text-[#FAF5EC]" : "hover:text-[#630D16]"}`}
                title="Mode Kertas Kuno / Sepian"
              >
                Kertas
              </button>
              <button 
                id="theme-btn-light"
                onClick={() => { setTheme("light"); playSound(587.33, 0.1, "sine"); }}
                className={`px-2 py-1 text-xs font-medium rounded-md transition ${theme === "light" ? "bg-rose-800 text-white" : "hover:text-rose-800"}`}
                title="Mode Terang"
              >
                Terang
              </button>
              <button 
                id="theme-btn-dark"
                onClick={() => { setTheme("dark"); playSound(659.25, 0.1, "sine"); }}
                className={`px-2 py-1 text-xs font-medium rounded-md transition ${theme === "dark" ? "bg-rose-900 text-rose-50" : "hover:text-stone-300"}`}
                title="Mode Jaga Malam (Mata Lembut)"
              >
                Malam
              </button>
            </div>

            {/* Font Control for Elderly / Easy Reading */}
            <div id="font-adjustment" className="flex items-center space-x-1 border-l pl-2 dark:border-neutral-800">
              <button 
                id="font-reduce-btn"
                onClick={makeFontSmaller} 
                className="p-1.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md transition-all cursor-pointer" 
                title="Kecilkan Huruf"
                disabled={fontSize <= 80}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono opacity-80 select-none w-8 text-center" title="Persentase ukuran huruf">{fontSize}%</span>
              <button 
                id="font-enlarge-btn"
                onClick={makeFontLarger} 
                className="p-1.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md transition-all cursor-pointer" 
                title="Besarkan Huruf"
                disabled={fontSize >= 220}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* SIDEBAR NAV DRAWER */}
      {sidebarOpen && (
        <div id="mobile-overlay" className="fixed inset-0 z-50 flex transition-opacity duration-300">
          {/* Backdrop */}
          <div 
            id="backdrop-shader"
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs transition-opacity" 
            onClick={() => setSidebarOpen(false)}
          />
          
          {/* Menu Panel */}
          <div id="sidebar-drawer-panel" className={`relative flex flex-col w-80 max-w-sm h-full shadow-2xl transition-all duration-300 ${st.sidebarBg}`}>
            
            {/* Header / Brand */}
            <div className={`p-5 flex items-center justify-between border-b ${st.accentLine}`}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full ${st.crossBg} flex items-center justify-center text-white`}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" />
                  </svg>
                </div>
                <div>
                  <h2 className={`text-md font-serif font-bold ${st.titleColor}`}>Doa Agpeya</h2>
                  <p className="text-[10px] text-neutral-500 uppercase font-semibold">Copt Indonesia Online</p>
                </div>
              </div>
              <button 
                id="sidebar-close-btn"
                onClick={() => setSidebarOpen(false)}
                className="p-2 -mr-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                title="Tutup Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links / Hours Directory */}
            <nav id="sidebar-directory" className="flex-1 overflow-y-auto p-4 space-y-1">
              
              <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-widest text-neutral-500">
                Laman Kunci
              </div>
              <button
                id="dir-home-btn"
                onClick={() => { setActiveTab("home"); setSidebarOpen(false); }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm text-left transition ${activeTab === "home" ? st.navActive : "hover:bg-black/5 dark:hover:bg-white/5"}`}
              >
                <Compass className={`w-5 h-5 ${st.textAccent}`} />
                <span>Home Dashboard</span>
              </button>

              <div className="pt-4 pb-2 px-3 py-2 text-[10px] uppercase font-bold tracking-widest text-neutral-500">
                7 Jam Kanonik (Doa Jam)
              </div>
              
              {agpeyaHours.map((hour) => {
                const isRecommended = hour.id === recommendedHourId;
                return (
                  <button
                    id={`dir-hour-${hour.id}`}
                    key={hour.id}
                    onClick={() => { setActiveTab(hour.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left transition ${activeTab === hour.id ? st.navActive : "hover:bg-black/5 dark:hover:bg-white/5"}`}
                  >
                    <div className="flex items-center space-x-3">
                      <BookOpen className={`w-4 h-4 ${isRecommended ? "text-amber-600 dark:text-amber-400 animate-pulse" : ""}`} />
                      <div className="leading-tight">
                        <div className="font-semibold">{hour.title}</div>
                        <div className="text-[11px] opacity-70 font-mono">{hour.timeText} &middot; {hour.titleEn}</div>
                      </div>
                    </div>
                    {isRecommended && (
                      <span className="text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20 uppercase">
                        Kini
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-4 pb-2 px-3 py-2 text-[10px] uppercase font-bold tracking-widest text-neutral-500">
                Tambahan & Pengetahuan
              </div>

              <button
                id="dir-other-btn"
                onClick={() => { setActiveTab("other"); setSidebarOpen(false); }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm text-left transition ${activeTab === "other" ? st.navActive : "hover:bg-black/5 dark:hover:bg-white/5"}`}
              >
                <BookOpenCheck className="w-4 h-4" />
                <span>Doa Lain-lain</span>
              </button>

              <button
                id="dir-about-btn"
                onClick={() => { setActiveTab("about"); setSidebarOpen(false); }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm text-left transition ${activeTab === "about" ? st.navActive : "hover:bg-black/5 dark:hover:bg-white/5"}`}
              >
                <Info className="w-4 h-4" />
                <span>Tentang Agpeya</span>
              </button>

              <button
                id="dir-contact-btn"
                onClick={() => { setActiveTab("contact"); setSidebarOpen(false); }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm text-left transition ${activeTab === "contact" ? st.navActive : "hover:bg-black/5 dark:hover:bg-white/5"}`}
              >
                <Mail className="w-4 h-4" />
                <span>Kontak & Saran</span>
              </button>

            </nav>

            {/* Liturgical quote in sidebar drawer */}
            <div className={`p-4 border-t ${st.accentLine} bg-black/5`}>
              <p className="text-[11px] italic opacity-80 text-center leading-relaxed font-serif">
                "Aku memuji Engkau tujuh kali sehari, sekalian karena jalan hukum-Mu yang adil." <br/>
                <strong className={`block text-[10px] mt-1 ${st.textAccent}`}>— Mazmur 118:164</strong>
              </p>
            </div>

          </div>
        </div>
      )}

      {/* CORE FRAMEWORK BODY CONTENT */}
      <main id="main-content-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300">
        
        {/* VIEW 1: MAIN HOME DASHBOARD */}
        {activeTab === "home" && (
          <div id="home-dashboard-view">
            
            {/* Ambient greeting cover section & liturgical history */}
            <div id="dashboard-hero" className={`p-8 rounded-2xl mb-8 ${st.card} relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6`}>
              <div className="flex-1 relative z-10">
                <div className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase ${st.bgAccent} text-white mb-4`}>
                  <BookOpenCheck className="w-3.5 h-3.5" />
                  <span>Agpeya Online Indonesia</span>
                </div>
                <h2 className={`text-3xl sm:text-4xl font-serif font-extrabold ${st.textAccentMuted} tracking-tight leading-tight`}>
                  Tuntunan Doa Tujuh Waktu Gereja Koptik Ortodoks
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed opacity-90 max-w-2xl">
                  Doa Agpeya berbahasa Indonesia. **Agpeya** (bahasa Koptik: ⲁϫⲡⲓⲁ) adalah Kitab Doa Jam (Kanonik) yang diwariskan oleh para Bapa Padang Gurun Mesir sejak abad pertama Gereja. Berisikan mazmur-mazmur, injil, dan doa syafaat rohani yang menata hari Anda senantiasa di hadirat Allah.
                </p>
                
                {/* Daily devotion prompt */}
                <div className="mt-6 flex flex-wrap gap-3 items-center">
                  <button 
                    id="hero-suggested-pray-btn"
                    onClick={() => setActiveTab(recommendedHourId)} 
                    className={`px-5 py-2.5 rounded-md font-serif font-bold text-sm tracking-wide ${st.btnAccent} flex items-center space-x-2 cursor-pointer transition`}
                  >
                    <span>Sembahyang Sekarang: <strong>{recommendedHourObj?.title}</strong></span>
                    <Clock className="w-4 h-4 ml-1" />
                  </button>
                  <button
                    id="hero-about-btn"
                    onClick={() => setActiveTab("about")}
                    className={`px-5 py-2.5 rounded-md font-sans text-sm font-semibold hover:opacity-95 ${st.btnSecondary}`}
                  >
                    Sejarah Doa Agpeya
                  </button>
                </div>
              </div>

              {/* Liturgical Cross background banner */}
              <div className={`hidden lg:block w-48 h-48 opacity-10 flex-shrink-0 ${st.textAccentMuted} pointer-events-none select-none`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19M12 6a6 6 0 100 12 6 6 0 000-12z" />
                </svg>
              </div>
            </div>

            {/* Quick overview of standard Kyrie Counter Floating Widget */}
            <div id="quick-kyrie-dashboard-block" className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
              
              <div className="lg:col-span-8">
                <h3 className={`text-xl font-serif font-bold ${st.textAccent} mb-4 flex items-center space-x-2`}>
                  <Clock className={`w-5 h-5 ${st.textAccent}`} />
                  <span>Daftar 7 Waktu Sembahyang (Jam Doa Kanonik)</span>
                </h3>
                
                <div id="seven-hours-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {agpeyaHours.map((hour) => {
                    const isRecommended = hour.id === recommendedHourId;
                    return (
                      <div 
                        id={`hour-card-${hour.id}`}
                        key={hour.id} 
                        className={`p-5 rounded-xl transition ${st.card} hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between cursor-pointer`}
                        onClick={() => setActiveTab(hour.id)}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-neutral-500">
                              {hour.timeText}
                            </span>
                            {isRecommended && (
                              <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20 uppercase flex items-center space-x-1 animate-pulse">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                <span>Saatnya Sembahyang</span>
                              </span>
                            )}
                          </div>
                          
                          <h4 className={`text-lg font-serif font-bold ${st.textAccent} leading-snug`}>
                            {hour.title} &middot; <span className="font-sans font-normal text-sm opacity-85">({hour.titleEn})</span>
                          </h4>
                          <p className={`text-[11px] ${st.liturgicalCaption} uppercase tracking-wider`}>
                            Tema: {hour.theme}
                          </p>
                          <p className="text-xs leading-relaxed opacity-85 mt-2 line-clamp-3">
                            {hour.description}
                          </p>
                        </div>
                        
                        <div className={`mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-bold ${st.textAccent}`}>
                          <span>Mulai Sembahyang</span>
                          <span>&rarr;</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating style Kyrie Eleison Counter Assistant Card */}
              <div className="lg:col-span-4">
                <div id="kyrie-helper-assistant-card" className={`p-6 rounded-xl h-full flex flex-col justify-between ${st.card} relative overflow-hidden border-2 ${st.borderAccentBold}`}>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-black/5 dark:border-white/5">
                      <h3 className={`font-serif font-bold text-lg ${st.textAccentMuted} flex items-center space-x-2`}>
                        <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        <span>Kyrie Eleison Counter</span>
                      </h3>
                      {/* Audio mute button */}
                      <button 
                        id="dashboard-audio-toggle"
                        onClick={() => setIsAudioEnabled(!isAudioEnabled)} 
                        className={`p-1 text-slate-500 hover:${st.textAccent}`} 
                        title={isAudioEnabled ? "Matikan Suara Chime" : "Hidupkan Suara Chime"}
                      >
                        {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                      </button>
                    </div>

                    <p className="text-xs opacity-90 leading-relaxed mb-4">
                      Dalam doa Litani Agpeya, kita merapalkan <strong>Kyrie Eleison (Tuhan Kasihanilah)</strong> sebanyak 41 kali. Gunakan asisten hitung ini agar pikiran Anda tetap fokus memandang Allah.
                    </p>

                    {/* Progress Visual circle */}
                    <div id="countdown-radial" className="flex flex-col items-center justify-center my-6">
                      <div className="relative w-36 h-36 flex items-center justify-center">
                        {/* Circular progress background */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                          <circle 
                            cx="72" 
                            cy="72" 
                            r="62" 
                            stroke="currentColor" 
                            strokeWidth="8" 
                            fill="transparent" 
                            className="text-neutral-300 dark:text-neutral-800/50" 
                          />
                          <circle 
                            cx="72" 
                            cy="72" 
                            r="62" 
                            stroke="currentColor" 
                            strokeWidth="8" 
                            fill="transparent" 
                            strokeDasharray="389" 
                            strokeDashoffset={389 - (389 * kyrieCount) / 41}
                            strokeLinecap="round"
                            className={`${st.textAccent} transition-all duration-300`} 
                          />
                        </svg>

                        {/* Interactive Click Tracker directly on the Circle! */}
                        <button 
                          id="circle-kyrie-incrementer"
                          onClick={handleKyrieIncrement}
                          className="w-28 h-28 hover:scale-105 active:scale-95 transition-all bg-white dark:bg-neutral-900 rounded-full flex flex-col items-center justify-center shadow-md border border-neutral-200 dark:border-neutral-800 cursor-pointer"
                        >
                          <span className={`text-3xl font-serif font-extrabold ${st.textAccent}`}>{kyrieCount}</span>
                          <span className="text-[9px] uppercase tracking-widest font-bold text-neutral-500">dari 41</span>
                        </button>
                      </div>

                      {/* State messages inside the circle container */}
                      {kyrieCount === 41 && (
                        <div className="mt-3 text-center text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center space-x-1 justify-center animate-bounce">
                          <BookmarkCheck className="w-4 h-4" />
                          <span>41 Kali Selesai! Amin.</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Buttons controls */}
                  <div className="space-y-2 mt-2">
                    <button 
                      id="dashboard-kyrie-pulse"
                      onClick={handleKyrieIncrement}
                      className={`w-full py-3 rounded-lg font-serif font-bold text-sm ${st.btnAccent} flex items-center justify-center space-x-1 cursor-pointer transition`}
                    >
                      <MousePointerClick className="w-4 h-4" />
                      <span>{kyrieCount === 0 ? "Mulai Hitung (+1)" : "Tuhan Kasihanilah (+1)"}</span>
                    </button>
                    <button 
                      id="dashboard-kyrie-reset"
                      onClick={handleKyrieReset}
                      className="w-full py-2 hover:bg-slate-300/40 text-xs text-neutral-500 rounded-lg flex items-center justify-center space-x-1 cursor-pointer transition"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Ulangi Hitungan</span>
                    </button>
                  </div>

                </div>
              </div>

            </div>

            {/* Liturgical information tips */}
            <div id="liturgical-background-tips" className={`p-6 rounded-xl ${st.card}`}>
              <h3 className={`text-lg font-serif font-bold ${st.textAccentMuted} mb-3`}>
                Pedoman Singkat Sembahyang Agpeya
              </h3>
              <p className="text-xs leading-relaxed opacity-95 mb-4">
                Umat Koptik Ortodoks selalu mendasarkan kehidupannya sejalan dengan ritme sembahyang para malaikat Allah. Setiap jam doa menandai peristiwa agung dalam karya penebusan Kristus. Cobalah untuk menetapkan waktu sunyi beberapa menit sehari demi mendoakan jam yang dianjurkan.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg border border-black/5">
                  <span className={`font-bold ${st.textAccent} block mb-1`}>1. Tanda Salib & Doa Syukur</span>
                  Selalu mengawalinya dengan berlutut atau bersujud, membuat Tanda Salib untuk menolak segala godaan duniawi, dilanjutkan Doa Syukur demi meneguhkan niat suci kita.
                </div>
                <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg border border-black/5">
                  <span className={`font-bold ${st.textAccent} block mb-1`}>2. Alunan Mazmur</span>
                  Mazmur dibaca dengan bersahaja, tidak tergesa-gesa. Jika tidak memiliki banyak waktu, pilih beberapa mazmur kunci yang paling melunakkan batin Anda hari ini.
                </div>
                <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg border border-black/5">
                  <span className={`font-bold ${st.textAccent} block mb-1`}>3. Absolusi & Pertobatan</span>
                  Diakhiri dengan doa Absolusi yang memohon kuasa pengampunan dari Allah, berserah sepenuhnya di kaki Kristus agar keesokan hari dipenuhi berkat.
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: ACTIVE PRAYER HOUR VIEW */}
        {agpeyaHours.some(h => h.id === activeTab) && (() => {
          const hour = agpeyaHours.find(h => h.id === activeTab)!;
          const isRecommended = hour.id === recommendedHourId;
          
          return (
            <div id={`prayer-view-${hour.id}`} className="space-y-6">
              
              {/* Top Control Header in Prayer Panel */}
              <div id="prayer-header-banner" className={`p-6 sm:p-8 rounded-2xl ${st.card} relative overflow-hidden border-b-4 border-rose-800`}>
                <div className="relative z-10">
                  
                  {/* Back to Home Navigation & quick options */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <button 
                      id="prayer-back-btn"
                      onClick={() => setActiveTab("home")}
                      className="text-xs font-bold text-rose-800 dark:text-rose-400 flex items-center space-x-1 hover:underline cursor-pointer"
                    >
                      <span>&larr; Kembali ke Dashboard</span>
                    </button>
                    
                    {/* Expand/Collapse Control with custom button */}
                    <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-lg space-x-1 text-xs">
                      <button 
                        id="expand-all-sections-btn"
                        onClick={() => toggleAllSections(hour, true)}
                        className="px-2.5 py-1 hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded font-medium cursor-pointer"
                      >
                        Buka Semua Bagian
                      </button>
                      <button 
                        id="collapse-all-sections-btn"
                        onClick={() => toggleAllSections(hour, false)}
                        className="px-2.5 py-1 hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded font-medium cursor-pointer"
                      >
                        Tutup Semua Bagian
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-black/10 dark:bg-white/15">
                          Sembahyang Canonical Agpeya &bull; {hour.timeText}
                        </span>
                        {isRecommended && (
                          <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/10 uppercase">
                            Disarankan Saat Ini
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-rose-900 dark:text-rose-300 tracking-tight mt-1.5 leading-tight">
                        {hour.title} &middot; <span className="font-sans font-normal text-xl opacity-90">{hour.titleEn}</span>
                      </h2>
                      <p className={`text-xs ${st.liturgicalCaption} mt-1 uppercase tracking-wide`}>
                        Tema Utama: {hour.theme}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm opacity-90 mt-4 leading-relaxed max-w-3xl">
                    {hour.description}
                  </p>

                </div>
              </div>

              {/* INDIVIDUAL ACCORDION SECTIONS */}
              <div id="prayer-sections-accordion" className="space-y-4">
                {hour.sections.map((section, index) => {
                  const secKey = `${hour.id}_${index}`;
                  const isOpen = openSections[secKey] !== false; // default open
                  
                  return (
                    <div 
                      id={`accordion-panel-${hour.id}-${index}`}
                      key={index} 
                      className={`rounded-xl overflow-hidden shadow-xs border transition-all duration-300 ${st.card}`}
                    >
                      {/* Accordion Trigger Header */}
                      <button
                        id={`accordion-trigger-${hour.id}-${index}`}
                        onClick={() => toggleSection(hour.id, index)}
                        className={`w-full p-4 sm:p-5 flex items-center justify-between text-left transition select-none cursor-pointer ${st.cardHeader}`}
                      >
                        <div>
                          <h4 className="text-base sm:text-lg font-serif font-bold text-rose-900 dark:text-rose-300 leading-snug">
                            {section.title}
                          </h4>
                          {section.subTitle && (
                            <span className="text-xs font-mono opacity-80">{section.subTitle}</span>
                          )}
                        </div>
                        <div>
                          {isOpen ? <ChevronUp className="w-5 h-5 opacity-70" /> : <ChevronDown className="w-5 h-5 opacity-70" />}
                        </div>
                      </button>

                      {/* Accordion Content Panel */}
                      {isOpen && (
                        <div 
                          id={`accordion-content-${hour.id}-${index}`}
                          className="p-5 sm:p-6 space-y-6 divide-y divide-black/5 dark:divide-white/5" 
                          style={{ fontSize: `${fontSize}%` }}
                        >
                          {section.parts.map((p, pIdx) => (
                            <div key={pIdx} className={`${pIdx > 0 ? "pt-5" : ""} space-y-3`}>
                              
                              {p.label && (() => {
                                const bibleLink = getBibleLink(p.label);
                                return (
                                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 border-b border-black/5 dark:border-white/5 pb-2">
                                    <h5 className={`text-xs sm:text-sm tracking-wider uppercase font-bold text-neutral-500/85`}>
                                      {p.label}
                                    </h5>
                                    {bibleLink && (
                                      <a 
                                        href={bibleLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-1.5 text-xs hover:opacity-80 text-rose-800 dark:text-rose-400 font-sans font-bold cursor-pointer transition-all duration-150"
                                        id={`bible-link-${p.label.replace(/\s+/g, '-').toLowerCase()}`}
                                      >
                                        <span>Alkitab (bible.com)</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                      </a>
                                    )}
                                  </div>
                                );
                              })()}

                              <div className="space-y-3 font-serif leading-relaxed text-justified pr-1">
                                {p.text.map((sentence, sIdx) => {
                                  // Special styling detection for responses or guidance cues
                                  const isInstruction = sentence.startsWith("[") || sentence.startsWith("\"[") || sentence.includes("pilih beberapa") || sentence.includes("transkripsi");
                                  const isLiturgicalRef = sentence.includes("Bapa Kami") || sentence.includes("Kasihanilah") || sentence.includes("Kyrie Eleison");

                                  if (isInstruction) {
                                    return (
                                      <p 
                                        key={sIdx} 
                                        className="text-sm font-sans italic opacity-60 bg-amber-500/5 dark:bg-amber-500/5 p-3 rounded-lg border border-amber-500/10 text-amber-900 dark:text-amber-400"
                                      >
                                        {sentence}
                                      </p>
                                    );
                                  }

                                  return (
                                    <p 
                                      key={sIdx} 
                                      className={`${p.isResponse || isLiturgicalRef ? st.liturgicalText : "opacity-95"}`}
                                    >
                                      {sentence}
                                    </p>
                                  );
                                })}
                              </div>

                              {/* IF this is Litanies section, load the elegant 41-time recitation list! */}
                              {section.title.includes("PENGAKUAN IMAN") && pIdx === section.parts.length - 1 && (
                                <div id="recitation-kyrie-text-block" className={`mt-6 p-6 rounded-xl border-2 ${st.borderAccentBold} ${st.bgAccentLight} space-y-4`}>
                                  <div className={`flex items-center justify-between border-b pb-2.5 ${st.borderAccentMuted}`}>
                                    <span className={`text-base font-serif font-bold tracking-wide ${st.textAccent} uppercase`}>
                                      Kyrie Eleison (Tuhan Kasihanilah) 41 kali
                                    </span>
                                    <span className="text-xs font-mono font-bold opacity-60 uppercase tracking-widest px-2 py-0.5 rounded bg-black/5">41x RECITATION</span>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-2 max-h-72 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-700/20">
                                    {Array.from({ length: 41 }).map((_, i) => (
                                      <div 
                                        key={i} 
                                        className={`flex items-center space-x-3 py-1.5 border-b ${st.borderAccentMuted}`}
                                      >
                                        <span className="text-xs font-mono opacity-50 font-bold min-w-[20px]">
                                          {(i + 1).toString().padStart(2, "0")}.
                                        </span>
                                        <span className={`text-sm font-serif font-bold ${st.textAccent} opacity-95 hover:opacity-100 transition duration-150`}>
                                          Kyrie Eleison, Tuhan Kasihanilah
                                        </span>
                                      </div>
                                    ))}
                                  </div>

                                  <div className={`pt-2 border-t ${st.borderAccentMuted} text-center`}>
                                    <p className={`text-[11px] italic opacity-85 ${st.textAccent}`}>
                                      Doa ini diucapkan sebanyak 41 kali (melambangkan 39 cambiukan, mahkota duri, dan tusukan tombak pada lambung Kristus).
                                    </p>
                                  </div>
                                </div>
                              )}

                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* ACTION FINISH DEVOTION - Give interactive feedback upon completing prayer */}
              <div id="prayer-finish-action-block" className="flex flex-col items-center justify-center py-8">
                {sessionCompleted ? (
                  <div className="p-6 rounded-xl bg-amber-500/10 text-center space-y-3 max-w-md animate-pulse">
                    <Check className="w-8 h-8 text-amber-500 mx-auto" />
                    <h5 className="font-serif font-bold text-lg text-amber-800 dark:text-amber-400">Kemuliaan bagi Allah kita!</h5>
                    <p className="text-xs">Sembahyang Anda telah selesai. Streak harian bertambah dan didokumentasikan dalam batin rohani Anda.</p>
                  </div>
                ) : (
                  <button
                    id="prayer-complete-submit-btn"
                    onClick={() => finishPrayerSession(hour.id, hour.title)}
                    className={`px-8 py-3.5 rounded-lg text-sm font-serif font-bold tracking-wide ${st.btnAccent} hover:scale-105 transition-all flex items-center space-x-2 cursor-pointer shadow-lg`}
                  >
                    <BookmarkCheck className="w-4 h-4" />
                    <span>Selesaikan & Tutup Sembahyang {hour.title}</span>
                  </button>
                )}
                <p className="text-[11px] text-neutral-500 mt-2 select-none">Menutup doa memicu streak harian Anda berkembang.</p>
              </div>

            </div>
          );
        })()}

        {/* VIEW 3: OTHER PRAYERS (DOA LAIN-LAIN) */}
        {activeTab === "other" && (
          <div id="other-prayers-view" className="space-y-6">
            <div id="other-prayers-header" className={`p-6 sm:p-8 rounded-2xl ${st.card} border-l-4 border-rose-800`}>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-rose-900 dark:text-rose-300">
                Doa-doa Tambahan Gereja Ortodoks
              </h2>
              <p className="text-xs sm:text-sm mt-2 opacity-90 max-w-3xl leading-relaxed">
                Di luar ketujuh ibadah jam utama, penganut Koptik melafalkan doa-doa tambahan ini untuk menguduskan peristiwa kehidupan harian seperti makan bersama, bimbingan pengakuan dosa, dan persiapan Sakramen Ekaristi Kudus (Komuni).
              </p>
            </div>

            <div id="other-prayers-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPrayersData.map((prayer, index) => (
                <div id={`other-prayer-card-${index}`} key={index} className={`p-6 rounded-xl ${st.card} space-y-4`}>
                  <h3 className="text-md sm:text-lg font-serif font-bold text-rose-800 dark:text-rose-400 border-b pb-2">
                    {prayer.title}
                  </h3>
                  <div className="space-y-3 font-serif leading-relaxed text-sm pr-1 text-justify">
                    {prayer.text.map((paragraph, pIdx) => (
                      <p key={pIdx} className="opacity-95">{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: ABOUT AGPEYA (TENTANG AGPEYA) */}
        {activeTab === "about" && (
          <div id="about-view" className="space-y-6">
            <div id="about-hero-banner" className={`p-8 rounded-2xl ${st.card} text-center relative overflow-hidden`}>
              <h2 className="text-3xl font-serif font-extrabold text-rose-900 dark:text-rose-300">
                Mengenal Kitab Sembahyang Agpeya
              </h2>
              <p className="text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed opacity-95">
                "Agpeya" berasal dari kata bahasa Koptik **"Agp"** yang berarti **"Jam"**. Kitab ini mengatur doa-doa kita menyatu bersama seluruh umat beriman di seluruh jagat raya dari waktu ke waktu.
              </p>
            </div>

            <div id="about-history-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${st.card} space-y-3`}>
                <h3 className="text-lg font-serif font-bold text-rose-800 dark:text-rose-400">Asal Mula & Tradisi Monastik</h3>
                <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                  Pada abad-abad awal di padang gurun Mesir, para Bapa Padang Gurun (seperti Santo Antonius Agung dan Santo Pakomius) menetapkan pola doa yang teratur untuk merenungkan firman Allah tanpa henti. Pola ini kemudian dikanonisasikan ke dalam kitab teratur yang kini didoakan oleh seluruh umat Kristen Koptik di Mesir maupun dunia internasional.
                </p>
                <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                  Sembahyang ini melatih raga dan batin kita agar senantiasa "berdoa tanpa henti" (1 Tesalonika 5:17) dan menjaga mata rohani kita tetap waspada di tengah tantangan zaman modern.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${st.card} space-y-3`}>
                <h3 className="text-lg font-serif font-bold text-rose-800 dark:text-rose-400">Rincian Simbolis Jam Doa</h3>
                <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                  Setiap jam yang dicanangkan memiliki simbolisme unik bagi keselamatan kita:
                </p>
                <ul className="text-xs space-y-2 list-disc pl-5 opacity-95">
                  <li><strong>Jam Pertama (06.00):</strong> Menyambut terang jasmani dan memuliakan Terang Kristus yang bangkit mengalahkan maut.</li>
                  <li><strong>Jam Ketiga (09.00):</strong> Merenungkan jam ketika Kristus dijatuhi hukum gantung maut dan pencurahan Roh Kudus.</li>
                  <li><strong>Jam Keenam (12.00):</strong> Meratapi salib suci Kristus yang dipaku di Golgota demi dosa-dosa kita.</li>
                  <li><strong>Jam Kesembilan (15.00):</strong> Mengenang Kristus mangkat di kayu salib demi menebus kita menuju surga.</li>
                  <li><strong>Jam Kesebelas (17.00):</strong> Bersyukur atas damai sejahtera akhir hari saat tubuh suci Kristus diturunkan dari salib.</li>
                  <li><strong>Jam Keduabelas (18.00):</strong> Merenungkan perbaringan tubuh Kristus di kubur, serta kesiapan tidur kita menghadapi kematian jasmani.</li>
                  <li><strong>Tengah Malam (24.00):</strong> Memelihara pelita hati tetap bernyala menantikan kedatangan mempelai ilahi.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: CONTACT & PRAYER REQUESTS (KONTAK & SARAN) */}
        {activeTab === "contact" && (
          <div id="contact-view" className="max-w-2xl mx-auto space-y-6">
            <div id="contact-header" className={`p-6 rounded-2xl ${st.card} text-center`}>
              <h2 className="text-2xl font-serif font-extrabold text-rose-900 dark:text-rose-300">
                Hubungi Kami & Dukungan Doa
              </h2>
              <p className="text-xs mt-2 opacity-90 leading-relaxed">
                Kami berkomitmen memperbarui dan menyempurnakan klon Agpeya Indonesia ini bagi umat beriman sekalian. Sampaikan transkripsi doa, saran, maupun permohonan syafaat doa Anda kepada kami di bawah ini.
              </p>
            </div>

            <div id="contact-card-container" className={`p-6 rounded-xl ${st.card}`}>
              <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label id="lbl-contact-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Nama Lengkap Anda
                  </label>
                  <input 
                    id="inp-contact-name"
                    type="text" 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    placeholder="Contoh: Stefanus Koptik"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
                  />
                </div>

                <div>
                  <label id="lbl-contact-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Alamat Email Aktif
                  </label>
                  <input 
                    id="inp-contact-email"
                    type="email" 
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                    placeholder="nama@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
                  />
                </div>

                <div>
                  <label id="lbl-contact-message" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Saran Perbaikan Transkripsi / Permintaan Doa
                  </label>
                  <textarea 
                    id="inp-contact-message"
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                    placeholder="Sampaikan koreksi ejaan Doa Syukur, penambahan Mazmur Koptik Indonesia, atau isi doa syafaat khusus..."
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
                  />
                </div>

                <button 
                  id="contact-submit-btn"
                  type="submit"
                  className={`w-full py-3 rounded-lg font-serif font-bold text-sm tracking-widest uppercase cursor-pointer ${st.btnAccent} transition-all duration-300`}
                >
                  Kirim Pesan Syafaat
                </button>
              </form>
            </div>

            <div id="orthodox-community-card" className={`p-4 rounded-xl ${st.card} text-center space-y-2`}>
              <h4 className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-widest">
                Informasi Komunitas Koptik
              </h4>
              <p className="text-[11px] opacity-80 leading-relaxed">
                Teks doa Agpeya ini disadur dari buku doa Agpeya dari Gereja Ortodoks Koptik Indonesia. Silakan menghubungi Paroki Ortodoks Koptik terdekat di Indonesia untuk mendapatkan bimbingan rohani sakramental seutuhnya.
              </p>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER SECTION */}
      <footer id="app-footer" className={`py-12 mt-16 border-t font-serif transition-colors duration-300 ${theme === "dark" ? "bg-[#140c10] border-rose-950/60" : theme === "sepia" ? "bg-[#ebdcb9]/40 border-[#dfd0b2]" : "bg-neutral-100 border-neutral-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          <div className="flex justify-center space-x-2 text-rose-800 dark:text-rose-400">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" />
            </svg>
          </div>

          <p className="text-base font-bold text-rose-900 dark:text-rose-300">
            Doa Agpeya &middot; Gereja Ortodoks Koptik Indonesia
          </p>
          
          <p className="text-xs max-w-md mx-auto leading-relaxed opacity-80 font-sans">
            Doa Agpeya dalam Bahasa Indonesia. Dibuat dengan kecintaan luar biasa bagi warisan sakral Kristen Koptik di Indonesia. Semoga persekutuan rohani kita bertambah murni.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold font-sans mt-4">
            <button id="footer-home-btn" onClick={() => setActiveTab("home")} className="hover:underline">Dashboard</button>
            <span className="opacity-40">&middot;</span>
            <button id="footer-other-btn" onClick={() => setActiveTab("other")} className="hover:underline">Doa Tambahan</button>
            <span className="opacity-40">&middot;</span>
            <button id="footer-about-btn" onClick={() => setActiveTab("about")} className="hover:underline">Tentang Agpeya</button>
            <span className="opacity-40">&middot;</span>
            <button id="footer-contact-btn" onClick={() => setActiveTab("contact")} className="hover:underline">Kontak</button>
          </div>

          <div 
            id="footer-credits-section" 
            onClick={() => {
              setShowCreditsAuthor(prev => !prev);
              playSound(440, 0.15, "sine", 0.02);
            }}
            className="text-[10px] text-neutral-500 tracking-wider font-sans select-none pt-4 border-t border-black/5 dark:border-white/5 cursor-pointer hover:text-rose-800 dark:hover:text-rose-400 transition-colors"
          >
            TUHAN YESUS KRISTUS BERKATI &middot; AMIN &middot; COPYRIGHT (C) 2026 DOA AGPEYA INDONESIA
          </div>
          {showCreditsAuthor && (
            <div 
              id="footer-author-credits" 
              className="text-xs font-serif italic text-rose-800 dark:text-rose-300 animate-fade-in pb-2"
            >
              by Richard &amp; Nova Daris
            </div>
          )}

        </div>
      </footer>

    </div>
  );
}
