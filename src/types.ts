export interface PrayerSection {
  title: string;
  subTitle?: string;
  parts: {
    label?: string;
    text: string[];
    isResponse?: boolean; // E.g., responses like "Amin", "Tuhan Kasihanilah"
  }[];
}

export interface PrayerHour {
  id: string;
  title: string; // Jam Pertama
  titleEn: string; // Prime
  timeText: string; // 06:00 (Pagi)
  theme: string; // Kebangkitan Tuhan Yesus Kristus dan Penciptaan Terang
  description: string; // Didoakan saat bangun pagi untuk menyukuri hari baru...
  sections: PrayerSection[];
}
