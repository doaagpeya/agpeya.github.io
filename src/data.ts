import { PrayerHour } from "./types";

// Standard prayers that are reused across hours
export const corePrayers = {
  tandaSalib: {
    title: "Tanda Salib",
    text: [
      "Dalam nama Bapa, dan Putra, dan Roh Kudus, Allah Yang Esa. Amin.",
      "Kyrie Eleison. Tuhan kasihanilah. Tuhan kasihanilah. Tuhan kasihanilah. Tuhan berkatilah kami. Amin.",
      "Kemuliaan kepada Bapa dan Putra dan Roh Kudus, sekarang dan selamanya dan dari segala abad hingga segala abad. Amin.",
      "Layakkan kami untuk berdoa dengan penuh syukur:"
      ]
  },
  doaTuhan: {
    title: "Doa Bapa Kami",
    text: [
      "Bapa kami yang ada di surga,",
      "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
      "Jadilah kehendak-Mu di bumi seperti di surga.",
      "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
      "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
      "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari pada yang jahat,",
      "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
    ]
  },
  doaSyukur: {
    title: "Doa Syukur (Koptik)",
    text: [
      "Marilah kita bersyukur kepada Allah Yang Maha Baik dan Maha Pengasih, Bapa dari Tuhan, Allah dan Juru Selamat kita, Yesus Kristus.",
      "Karena Dia telah menudungi, menolong, menjaga, dan menerima kami kepadaNya, menyisihkan, mendukung dan membawa kami kedalam saat ini.",
      "Mari kita juga mohon kepada-Nya, Allah dan Tuhan kita, Pantokrator, untuk menjaga kita dalam damai pada hari suci ini dan semua hari-hari hidup kita.",
      "Ya Junjungan Agung, Tuhan dan Allah Sang Pantokrator, Bapa dari Tuhan, Allah dan Juru Selamat kami, Yesus Kristus. Kami mengucap syukur kepada-Mu untuk segala sesuatu, mengenai segala sesuatu dan dalam segala sesuatu.",
      "Karena Engkau telah menudungi, menolong, menjaga, dan menerima kami pada-Mu sendiri, menyisihkan, mendukung, dan membawa kami hingga saat ini.",
      "Karena itu kami meminta dan memohon kebaikan-Mu, wahai Yang mengasihi manusia, tolonglah kami untuk menyelesaikan hari suci ini, dan semua hari-hari kehidupan kami dalam damai dengan rasa takut kepada-Mu.",
      "Semua iri, semua pencobaan, semua pekerjaan setan, nasihat orang fasik dan musuh yang bangkit melawan kami, baik yang terlihat maupun tersembunyi, supaya enyah dari kami. Dan dari semua umat-Mu, dan dari gereja ini, dari sini dari tempat suci-Mu. Tapi hal-hal yang baik dan menguntungkan yang diberikan kepada kami, untuk itu berikanlah kepada kami kuasa untuk menginjak ular dan kalajengking, dan atas semua kekuatan musuh. Dan janganlah membawa kami dalam pencobaan tetapi bebaskanlah dari yang jahat.",
      "Melalui anugerah, belas kasihan dan demi kasih Putra-Mu yang tunggal kepada manusia, Tuhan  kami, Allah dan Juruselamat Yesus Kristus, melalui-Nya kemuliaan, hormat, kuasa dan sembah sujud hanya layak bagi-Mu, bersama dengan Dia dan Roh Kudus, Sang Pemberi Hidup, yang sehakekat dengan-Mu, sekarang dan selamanya dari segala abad hingga segala abad. Amin."
    ]
  },
  mazmur51: {
    title: "Mazmur 51 (Pertobatan)",
    text: [
      "Kasihanilah aku, ya Allah, menurut kasih setia-Mu, hapuskanlah pelanggaranku menurut rahmat-Mu yang besar!",
      "Bersihkanlah aku seluruhnya dari kesalahanku, dan tahirkanlah aku dari dosaku!",
      "Sebab aku sendiri sadar akan pelanggaranku, aku senantiasa bergumul dengan dosaku.",
      "Terhadap Engkau, terhadap Engkau sajalah aku telah berdosa dan melakukan apa yang Kauanggap jahat, supaya ternyata Engkau adil dalam putusan-Mu, bersih dalam penghukuman-Mu.",
      "Sesungguhnya, dalam kesalahan aku diperanakkan, dalam dosa aku dikandung ibuku.",
      "Sesungguhnya, Engkau berkenan akan kebenaran dalam batin, dan dengan diam-diam Engkau memberitahukan hikmat kepadaku.",
      "Bersihkanlah aku dari pada dosaku dengan hisop, maka aku menjadi tahir, basuhlah aku, maka aku menjadi lebih putih dari salju!",
      "Biarlah aku mendengar kegirangan dan sukacita, biarlah tulang yang Kauremukkan bersorak-sorak kembali!",
      "Sembunyikanlah wajah-Mu terhadap dosaku, hapuskanlah segala kesalahanku!",
      "Jadikanlah hatiku tahir, ya Allah, dan perbaharuilah batinku dengan roh yang teguh!",
      "Janganlah membuang aku dari hadapan-Mu, dan janganlah mengambil roh-Mu yang kudus dari padaku!",
      "Bangkitkanlah kembali padaku kegirangan karena selamat yang dari pada-Mu, dan lengkapilah aku dengan roh yang rela!",
      "Maka aku akan mengajarkan jalan-Mu kepada orang-orang yang melakukan pelanggaran, supaya orang-orang berdosa berbalik kepada-Mu.",
      "Lepaskanlah aku dari hutang darah, ya Allah, Allah keselamatanku, maka lidahku akan bersorak-sorai memberitakan keadilan-Mu!",
      "Ya Tuhan, bukalah bibirku, supaya mulutku memberitakan puji-pujian kepada-Mu!",
      "Sebab Engkau tidak berkenan kepada korban sembelihan; sekiranya kupersembahkan korban bakaran, Engkau tidak menyukainya.",
      "Korban sembelihan kepada Allah ialah jiwa yang hancur; hati yang patah dan remuk tidak akan Kaupandang hina, ya Allah.",
      "Lakukanlah kebaikan kepada Sion menurut kerelaan hati-Mu, bangunkanlah tembok-tembok Yerusalem!",
      "Maka Engkau akan berkenan kepada korban yang benar, korban bakaran dan korban yang terbakar seluruhnya; maka orang akan mengorbankan lembu jantan di atas mezbah-Mu. ALLELUIA."
    ]
  },
  trisagion: {
    title: "Doa kudus (Trisagion)",
    text: [
      "Allah Kudus, Maha Kuasa Kudus, Kekal Kudus, yang disalib karena kita, kasihanilah kami.",
      "Allah Kudus, Maha Kuasa Kudus, Kekal Kudus, yang bangkit dari kematian dan naik ke surga, kasihanilah kami.",
      "Kemuliaan kepada Bapa dan Putra dan Roh Kudus sekarang dan selamanya dari segala abad hingga segala abad. Amin.",
      "Ya, Tritunggal Maha Kudus, kasihanilah kami. (3X)",
      "Ya, Tuhan, ampunilah dosa-dosa kami. Ya, Tuhan, ampunilah pelanggaran kami. Ya, Tuhan, ampunilah kesalahan kami.",
      "Ya, Tuhan, sertailah mereka yang sakit, sembuhkanlah mereka dalam nama-Mu yang kudus, ya Tuhan, berilah istirahat bagi jiwa-jiwa yang telah kembali kepada-Mu.",
      "Ya, Tuhan Engkau yang tanpa dosa, kasihanilah kami. Ya, Tuhan Engkau yang tanpa dosa, topanglah kami dan terimalah doa-doa kami. Karena bagi-Mu lah kemuliaan, hormat dan kekudusan.",
      "Tuhan kasihanilah kami, Tuhan kasinahilah kami, Tuhan berkatilah kami. Amin."
    ]
  }
};

export const agpeyaHours: PrayerHour[] = [
  {
    id: "prime",
    title: "Jam Pertama",
    titleEn: "Prime",
    timeText: "06:00 (Pagi Hari)",
    theme: "Mengingat Kebangkitan Kristus dan Terang Sejati",
    description: "Didoakan di pagi hari saat terbangun. Melambangkan fajar hari baru dan kehadiran Kristus sebagai Terang Sejati dunia yang melenyapkan kegelapan dosa.",
    sections: [
      {
        title: "I. Pendahuluan (Pengantar Doa)",
        subTitle: "Doa Awal & Doa Syukur",
        parts: [
          { label: "Tanda Salib", text: corePrayers.tandaSalib.text },
          { label: "Bapa Kami", text: corePrayers.doaTuhan.text },
          { label: "Doa Ucapan Syukur", text: corePrayers.doaSyukur.text },
          { label: "Mazmur 51", text: corePrayers.mazmur51.text },
          {
            label: "Datanglah, marilah kita bersujud",
            text: [
              "Datanglah, marilah kita bersujud, memohon kepada Kristus, Allah kita.",
              "Datanglah, marilah kita bersujud, meminta kepada Kristus, Raja kita.",
              "Datanglah, marilah kita bersujud, memohon kepada Kristus, Juru Selamat kita.",
              "Tuhan kami, Yesus Kristus, Sang Firman Allah, Allah kami, lindungilah kami melalui syafaat Santa Maria dan semua orang kudus-Mu, dan biarlah kami memulai hari ini dengan baik. Kasihanilah kami menurut kehendak-Mu selamanya. Malam telah berlalu, kami bersyukur pada-Mu, ya Tuhan, dan kami memohon pada-Mu untuk melindungi dan melepaskan kami dari dosa pada hari ini."
            ]
          },
          {
            label: "Surat Paulus (Efesus 4:1-5)",
            text: [
              "Pembacaan dari surat guru kita Santo Paulus kepada Jemaat di Efesus. Kiranya berkat-berkatnya menyertai kita semua. Amin.",
              "Sebab itu aku menasihatkan kamu, aku, orang yang dipenjarakan karena Tuhan, supaya hidupmu sebagai orang-orang yang telah dipanggil berpadanan dengan panggilan itu.",
              "Hendaklah kamu selalu rendah hati, lemah lembut, dan sabar. Tunjukkanlah kasihmu dalam hal saling membantu.",
              "Dan berusahalah memelihara kesatuan Roh oleh ikatan damai sejahtera:",
              "Satu tubuh, dan satu Roh, sebagaimana kamu telah dipanggil kepada satu pengharapan dalam panggilanmu,",
              "Satu Tuhan, satu iman, satu baptisan. Amin."
            ]
          },
          {
            label: "Iman Gereja",
            text: [
              "Satulah Bapa itu dari semua. Satulah Putra-Nya, Yesus Kristus Sang Firman yang menjadi manusia, mati dan bangkit dari antara orang mati pada hari ketiga, dan membangkitkan kita bersama Dia.",
              "Satulah Roh Kudus, Sang Penghibur, satu dalam Hipostasis, yang berasal dari Bapa, yang menyucikan seluruh ciptaan, dan mengajar kita menyembah Tri Tunggal Yang Kudus. Satu dalam ke-Ilahi-an dan satu dalam kodrat. Kita memuji Dia, dan memuliakan Dia selamanya. Amin."
            ]
          },
          {
            label: "Pendahuluan",
            text: [
              "Doa Jam Pertama pada hari yang diberkati ini, aku panjatkan kepada Kristus Rajaku dan Allahku, dan memohon kepada-Nya untuk mengampuni segala dosaku.",
              "Dari Mazmur-mazmur bapa kita Daud, nabi dan raja yang tahir, kiranya berkat-berkatnya menyertai kita semua. Amin."
            ]
          }
        ]
      },
      {
        title: "II. Mazmur-Mazmur Agpeya",
        subTitle: "Mazmur Pilihan untuk Pagi Hari",
        parts: [
          {
            label: "Mazmur 1 - Kebahagiaan Orang Benar",
            text: [
              "Berbahagialah orang yang tidak berjalan menurut nasihat orang fasik, yang tidak berdiri di jalan orang berdosa, dan yang tidak duduk dalam kumpulan pencemooh,",
              "tetapi yang kesukaannya ialah Taurat TUHAN, dan yang merenungkan Taurat itu siang dan malam.",
              "Ia seperti pohon, yang ditanam di tepi aliran air, yang menghasilkan buahnya pada musimnya, dan yang tidak layu daunnya; apa saja yang diperbuatnya berhasil.",
              "Bukan demikian orang fasik: mereka seperti sekam yang ditiupkan angin.",
              "Sebab itu orang fasik tidak akan tahan dalam penghakiman, begitu pula orang berdosa dalam perkumpulan orang benar;",
              "Sebab TUHAN mengenal jalan orang benar, tetapi jalan orang fasik menuju kebinasaan. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 2 - Kemenangan Raja yang Diurapi",
            text: [
              "Mengapa rusuh bangsa-bangsa, mengapa suku-suku bangsa mereka-reka perkara yang sia-sia?",
              "Raja-raja dunia bersiap-siap dan para pembesar bermufakat bersama-sama melawan Tuhan dan yang diurapi-Nya:",
              "”Marilah kita memutuskan belenggu-belenggu mereka dan membuang tali-tali mereka dari pada kita!”",
              "Dia, yang bersemayam di sorga, tertawa; Tuhan mengolok-olok mereka.",
              "Maka berkatalah Ia kepada mereka dalam murka-Nya dan mengejutkan mereka dalam kehangatan amarah-Nya:",
              "”Akulah yang telah melantik raja-Ku di Sion, gunung-Ku yang kudus!”",
              "Aku mau menceritakan tentang ketetapan Tuhan; Ia berkata kepadaku: ”Anak-Ku engkau! Engkau telah Kuperanakkan pada hari ini.",
              "Mintalah kepada-Ku, maka bangsa-bangsa akan Kuberikan kepadamu menjadi milik pusakamu, dan ujung bumi menjadi kepunyaanmu.",
              "Engkau akan meremukkan mereka dengan gada besi, memecahkan mereka seperti tembikar tukang periuk.”",
              "Oleh sebab itu, hai raja-raja, bertindaklah bijaksana, terimalah pengajaran, hai para hakim dunia!",
              "Beribadahlah kepada Tuhan dengan takut dan ciumlah kaki-Nya dengan gemetar,",
              "supaya Ia jangan murka dan kamu binasa di jalan, sebab mudah sekali murka-Nya menyala. Berbahagialah semua orang yang berlindung pada-Nya! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 3 - Kepercayaan Pagi Hari dalam Kesusahan",
            text: [
              "Ya Tuhan, betapa banyaknya lawanku! Banyak orang yang bangkit menyerang aku;",
              "banyak orang yang berkata tentang aku: ”Baginya tidak ada pertolongan dari pada Allah.”",
              "Tetapi Engkau, Tuhan, adalah perisai yang melindungi aku, Engkaulah kemuliaanku dan yang mengangkat kepalaku.",
              "With nyaring aku berseru kepada Tuhan, dan Ia menjawab aku dari gunung-Nya yang kudus.",
              "Aku membaringkan diri, lalu tidur; aku bangun, sebab Tuhan menopang aku!",
              "Aku tidak takut kepada puluhan ribu orang yang siap mengepung aku.",
              "Bangkitlah, Tuhan, tolonglah aku, ya Allahku! Ya, Engkau telah memukul rahang semua musuhku, dan mematahkan gigi orang-orang fasik.",
              "Dari Tuhan datang pertolongan. Berkat-Mu atas umat-Mu! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 4 - Doa Kepercayaan di Malam Hari / Damai Batin",
            text: [
              "Apabila aku berseru, jawablah aku, ya Allah, yang membenarkan aku. Di dalam kesesakan Engkau memberi kelegaan kepadaku. Kasihanilah aku and dengarkanlah doaku!",
              "Hai orang-orang, berapa lama lagi kemuliaanku dinodai, berapa lama lagi kamu mencintai yang sia-sia dan mencari kebohongan?",
              "Ketahuilah, bahwa Tuhan telah memilih bagi-Nya seorang yang dikasihi-Nya; Tuhan mendengarkan, apabila aku berseru kepada-Nya.",
              "Biarlah kamu marah, tetapi jangan berbuat dosa; berkata-katalah dalam hatimu di tempat tidurmu, tetapi tetaplah diam.",
              "Persembahkanlah korban yang benar dan percayalah kepada Tuhan.",
              "Banyak orang berkata: ”Siapa yang akan memperlihatkan yang baik kepada kita?” Biarlah cahaya wajah-Mu menyinari kami, ya Tuhan!",
              "Engkau telah memberikan sukacita kepadaku, lebih banyak dari pada mereka ketika mereka kelimpahan gandum dan anggur.",
              "Dengan tenteram aku mau membaringkan diri, lalu segera tidur, sebab hanya Engkaulah, ya Tuhan, yang membiarkan aku diam dengan aman. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 5 - Doa Pagi Hari Memohon Perlindungan",
            text: [
              "Berilah telinga kepada perkataanku, ya Tuhan, indahkanlah keluh kesahku.",
              "Perhatikanlah teriakku minta tolong, ya Rajaku dan Allahku, sebab kepada-Mulah aku berdoa.",
              "Tuhan, pada waktu pagi Engkau mendengar seruanku, pada waktu pagi aku mengatur persembahan bagi-Mu, dan aku menunggu-nunggu.",
              "Sebab Engkau bukanlah Allah yang berkenan kepada kefasikan; orang jahat takkan menumpang pada-Mu.",
              "Pembual tidak akan tahan di depan mata-Mu; Engkau membenci semua orang yang melakukan kejahatan.",
              "Engkau membinasakan orang-orang yang berkata bohong, Tuhan jijik melihat penumpah darah dan penipu.",
              "Tetapi aku, berkat kasih setia-Mu yang besar, aku akan masuk ke dalam rumah-Mu, sujud menyembah ke arah bait-Mu yang kudus dengan takut akan Engkau.",
              "Tuhan, tuntunlah aku dalam keadilan-Mu karena seteruku; ratakanlah jalan-Mu di depanku.",
              "Sebab perkataan mereka tidak ada yang jujur, batin mereka penuh kebusukan, kerongkongan mereka seperti kubur ternganga, lidah mereka merayu-rayu.",
              "Biarlah mereka menanggung kesalahan mereka, ya Allah, biarlah mereka jatuh karena rancangannya sendiri; buanglah mereka karena banyaknya pelanggaran mereka, sebab mereka memberontak terhadap Engkau.",
              "Tetapi semua orang yang berlindung pada-Mu akan bersukacita, mereka akan bersorak-sorai selama-lamanya, karena Engkau menaungi mereka; dan karena Engkau akan bersukaria orang-orang yang mengasihi nama-Mu.",
              "Sebab Engkaulah yang memberkati orang benar, ya Tuhan; Engkau memagari dia dengan anugerah-Mu seperti perisai. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 6 - Doa Mohon Belas Kasihan di Tengah Kesusahan",
            text: [
              "Ya Tuhan, janganlah menghukum aku dalam murka-Mu, dan janganlah menghajar aku dalam kepanasan amarah-Mu.",
              "Kasihanilah aku, Tuhan, sebab aku merana; sembuhkanlah aku, Tuhan, sebab tulang-tulangku gemetar,",
              "dan jiwaku pun sangat terkejut; tetapi Engkau, Tuhan, berapa lama lagi?",
              "Kembalilah pula, Tuhan, luputkanlah jiwaku, selamatkanlah aku oleh karena kasih setia-Mu.",
              "Sebab di dalam maut tidaklah orang ingat kepada-Mu; siapakah yang akan bersyukur kepada-Mu di dalam dunia orang mati?",
              "Lesu aku karena mengeluh; setiap malam aku menggenangi tempat tidurku, dengan air mataku aku membanjiri ranjangku.",
              "Mataku mengidap karena sakit hati, rabun karena semua lawanku.",
              "Menjauhlah dari padaku, kamu sekalian yang melakukan kejahatan, sebab Tuhan telah mendengar tangisku;",
              "Tuhan telah mendengar permohonanku, Tuhan menerima doaku.",
              "Semua musuhku mendapat malu dan sangat terkejut; mereka mundur dan mendapat malu dalam sekejap mata. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 8 - Kemuliaan Allah dan Keagungan Manusia",
            text: [
              "Ya Tuhan, Tuhan kami, betapa mulianya nama-Mu di seluruh bumi! Keagungan-Mu yang mengatasi langit dinyanyikan.",
              "Dari mulut bayi-bayi dan anak-anak yang menyusu telah Kauletakkan dasar kekuatan karena lawan-Mu, untuk membungkamkan musuh dan pendendam.",
              "Jika aku melihat langit-Mu, buatan jari-Mu, bulan dan bintang-bintang yang Kautempatkan:",
              "apakah manusia, sehingga Engkau mengingatnya? Apakah anak manusia, sehingga Engkau mengindahkannya?",
              "Namun Engkau telah membuatnya hampir sama seperti Allah, dan telah memahkotainya dengan kemuliaan dan hormat.",
              "Engkau membuat dia berkuasa atas buatan tangan-Mu; segala-galanya telah Kauletakkan di bawah kakinya:",
              "kambing domba dan lembu sapi sekalian, juga binatang-binatang di padang;",
              "burung-burung di udara dan ikan-ikan di laut, dan apa yang melintasi arus lautan.",
              "Ya Tuhan, Tuhan kami, betapa mulianya nama-Mu di seluruh bumi! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 12 - Tuhan adalah Penolong Terhadap Kesombongan Manusia",
            text: [
              "Tolonglah kiranya, Tuhan, sebab orang saleh telah habis, telah lenyap orang-orang yang setia dari antara anak-anak manusia.",
              "Mereka berkata dusta, yang seorang kepada yang lain, mereka berkata dengan bibir yang manis dan hati yang bercabang.",
              "Biarlah Tuhan mengerat segala bibir yang manis dan setiap lidah yang bercakap besar,",
              "dari mereka yang berkata: ”Dengan lidah kami, kami menang! Bibir kami menyokong kami! Siapakah tuan atas kami?”",
              "Oleh karena penindasan terhadap orang-orang yang lemah, oleh karena keluhan orang-orang miskin, sekarang juga Aku bangkit, firman Tuhan; Aku memberi keselamatan kepada orang yang menghauskannya.",
              "Janji Tuhan adalah janji yang murni, bagaikan perak yang teruji, tujuh kali dimurnikan dalam dapur peleburan di tanah.",
              "Engkau, Tuhan, yang akan menepatinya, Engkau akan menjaga kami senantiasa terhadap angkatan ini.",
              "Orang-orang fasik berjalan ke mana-mana, sementara kebusukan muncul di antara anak-anak manusia. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 13 - Doa Kepercayaan di Tengah Pencobaan Sementara",
            text: [
              "Berapa lama lagi, Tuhan, Kaulupakan aku terus-menerus? Berapa lama lagi Kausembunyikan wajah-Mu terhadap aku?",
              "Berapa lama lagi aku harus menaruh kekuatiran dalam diriku, dan bersedih hati sepanjang hari? Berapa lama lagi musuhku meninggikan diri atasku?",
              "Pandanglah kiranya, jawablah aku, ya Tuhan, Allahku! Buatlah mataku bercahaya, supaya jangan aku tertidur dan mati,",
              "supaya musuhku jangan berkata: ”Aku telah mengalahkan dia,” dan lawan-lawanku bersorak-sorak, apabila aku goyah.",
              "Tetapi aku, kepada kasih setia-Mu aku percaya, hatiku bersorak-sorak karena penyelamatan-Mu.",
              "Aku mau menyanyi untuk Tuhan, karena Ia telah berbuat baik kepadaku. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 15 - Siapa yang Boleh Diam di Bait Allah?",
            text: [
              "Tuhan, siapa yang boleh menumpang dalam kemah-Mu? Siapa yang boleh diam di gunung-Mu yang kudus?",
              "Yaitu dia yang berlaku tidak bercela, yang melakukan apa yang adil dan yang mengatakan kebenaran dengan segenap hatinya,",
              "yang tidak menyebarkan fitnah dengan lidahnya, yang tidak berbuat jahat terhadap temannya dan yang tidak menimpakan cela kepada tetangganya;",
              "yang memandang hina orang yang tersingkir, tetapi memuliakan orang yang takut akan Tuhan; yang berpegang pada sumpah, walaupun rugi;",
              "yang tidak meminjamkan uangnya dengan makan riba dan tidak menerima suap melawan orang yang tak bersalah.",
              "Siapa yang berlaku demikian, tidak akan goyah selama-lamanya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 16 - Bahagia Orang yang Berlindung Pada Allah",
            text: [
              "Jagalah aku, ya Allah, sebab pada-Mu aku berlindung.",
              "Aku berkata kepada Tuhan: ”Engkaulah Tuhanku, tidak ada yang baik bagiku selain Engkau!”",
              "Orang-orang kudus yang ada di tanah ini, merekalah orang mulia yang selalu menjadi kesukaanku.",
              "Bertambah besar kesedihan orang-orang yang mengikuti allah lain; aku tidak akan ikut mempersembahkan korban curahan mereka yang dari darah, juga tidak akan menyebut-nyebut nama mereka di bibirku.",
              "Ya Tuhan, Engkaulah bagian warisanku dan pialaku, Engkau sendirilah yang meneguhkan bagian yang diundikan kepadaku.",
              "Tali pengukur jatuh bagiku di tempat-tempat yang permai; ya, milik pusakaku menyenangkan hatiku.",
              "Aku memuji Tuhan, yang telah memberi nasihat kepadaku, ya, pada waktu malam hati nuraniku mengajari aku.",
              "Aku senantiasa memandang kepada Tuhan; karena Ia berdiri di sebelah kananku, aku tidak goyah.",
              "Sebab itu hatiku bersukacita dan jiwaku bersorak-sorai, bahkan tubuhku akan diam dengan tenteram;",
              "sebab Engkau tidak menyerahkan aku ke dunia orang mati, dan tidak membiarkan Orang Kudus-Mu melihat kebinasaan.",
              "Engkau memberitahukan kepadaku jalan kehidupan; di hadapan-Mu ada sukacita berlimpah-limpah, di tangan kanan-Mu ada nikmat senantiasa. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 19 - Kemuliaan Allah dalam Ciptaan dan Taurat",
            text: [
              "Langit menceritakan kemuliaan Allah, dan cakrawala memberitakan pekerjaan tangan-Nya; hari meneruskan berita itu kepada hari, dan malam menyampaikan pengetahuan itu kepada malam.",
              "Tidak ada berita dan tidak ada kata, suara mereka tidak terdengar; tetapi gema mereka terpencar ke seluruh dunia, dan perkataan mereka sampai ke ujung bumi.",
              "Ia memasang kemah di langit untuk matahari, yang keluar bagaikan pengantin laki-laki yang keluar dari kamarnya, girang bagaikan pahlawan yang hendak melakukan perjalanannya.",
              "Dari ujung langit ia terbit, dan ia beredar sampai ke ujung yang lain; tidak ada yang terlindung dari panas sinarnya.",
              "Taurat Tuhan itu sempurna, menyegarkan jiwa; peraturan Tuhan itu teguh, memberikan hikmat kepada orang yang tak berpengalaman.",
              "Titah Tuhan itu tepat, menyukakan hati; perintah Tuhan itu murni, membuat mata bercahaya.",
              "Takut akan Tuhan itu suci, tetap ada untuk selamanya; hukum-hukum Tuhan itu benar, adil semuanya,",
              "lebih indah dari pada emas, bahkan dari pada banyak emas tua; dan lebih manis dari pada madu, bahkan dari pada madu tetesan dari sarang lebah.",
              "Lagipula hamba-Mu diperingatkan oleh semuanya itu, dan orang yang berpegang padanya mendapat upah yang besar.",
              "Siapakah yang dapat mengetahui kesesatan? Bebaskanlah aku dari apa yang tidak kusadari.",
              "Lindungilah hamba-Mu, juga terhadap orang yang kurang ajar; janganlah mereka menguasai aku! Maka aku menjadi tak bercela dan bebas dari pelanggaran besar.",
              "Mudah-mudahan Engkau berkenan akan ucapan mulutku dan renungan hatiku, ya Tuhan, gunung batuku dan penebusku. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 25 - Doa Mohon Ampun, Pengajaran, dan Bimbingan",
            text: [
              "Kepada-Mu, ya Tuhan, kuangkat jiwaku; Allahku, kepada-Mu aku percaya; janganlah kiranya aku mendapat malu; janganlah musuh-musuhku beria-ria atas aku.",
              "Ya, semua orang yang menantikan Engkau takkan mendapat malu; yang mendapat malu ialah mereka yang berbuat khianat dengan tidak ada alasannya.",
              "Beritahukanlah jalan-jalan-Mu kepadaku, ya Tuhan, tunjukkanlah itu kepadaku.",
              "Bawalah aku berjalan dalam kebenaran-Mu dan ajarlah aku, sebab Engkaulah Allah yang menyelamatkan aku, Engkau kunanti-nantikan sepanjang hari.",
              "Ingatlah segala rahmat-Mu dan kasih setia-Mu, ya Tuhan, sebab semuanya itu sudah ada sejak purbakala.",
              "Dosa-dosaku pada waktu muda dan pelanggaran-pelanggaranku janganlah Kauingat, tetapi ingatlah kepadaku sesuai dengan kasih setia-Mu, oleh karena kebaikan-Mu, ya Tuhan.",
              "Tuhan itu baik dan benar; sebab itu Ia menunjukkan jalan kepada orang yang sesat.",
              "Ia membimbing orang-orang yang rendah hati menurut hukum, dan Ia mengajarkan jalan-Nya kepada orang-orang yang rendah hati.",
              "Segala jalan Tuhan adalah kasih setia dan kebenaran bagi orang yang berpegang pada perjanjian-Nya dan peringatan-peringatan-Nya.",
              "Oleh karena nama-Mu, ya Tuhan, ampunilah kesalahanku, sebab besar kesalahan itu.",
              "Siapakah orang yang takut akan Tuhan? Kepadanya Tuhan menunjukkan jalan yang harus dipilihnya.",
              "Orang itu sendiri akan menetap dalam kebahagiaan dan anak cucunya akan mewarisi bumi.",
              "Tuhan bergaul karib dengan orang yang takut akan Dia, dan perjanjian-Nya diberitahukan-Nya kepada mereka.",
              "Mataku tetap terarah kepada Tuhan, sebab Ia mengeluarkan kakiku dari jaring.",
              "Berpalinglah kepadaku dan kasihanilah aku, sebab aku sebatang kara dan tertindas.",
              "Lapangkanlah hatiku yang sesak dan keluarkanlah aku dari kesulitanku!",
              "Tiliklah sengsaraku dan kesukaranku, dan ampunilah segala dosaku.",
              "Lihatlah, betapa banyaknya musuhku, dan bagaimana mereka membenci aku dengan sangat mendalam.",
              "Jagalah kiranya jiwaku dan lepaskanlah aku; janganlah aku mendapat malu, sebab aku berlindung pada-Mu.",
              "Ketulusan dan kejujuran kiranya mengawal aku, sebab aku menanti-nantikan Engkau.",
              "Ya Allah, bebaskanlah orang Israel dari segala kesesakannya! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 27 - Keberanian dalam Perlindungan Allah",
            text: [
              "Tuhan adalah terangku dan keselamatanku, kepada siapakah aku harus takut? Tuhan adalah benteng hidupku, terhadap siapakah aku harus gemetar?",
              "Ketika penjahat-penjahat menyerang aku untuk memakan dagingku, yakni semua lawanku dan musuhku, mereka sendirilah yang tergelincir dan jatuh.",
              "Sekalipun tentara berkemah mengepung aku, tidak takut hatiku; sekalipun timbul peperangan melawan aku, dalam hal itu pun aku tetap percaya.",
              "Satu hal telah kuminta kepada Tuhan, itulah yang kuingini: diam di rumah Tuhan seumur hidupku, menyaksikan kemurahan Tuhan dan menikmati bait-Nya.",
              "Sebab Ia melindungi aku dalam pondok-Nya pada waktu bahaya; Ia menyembunyikan aku dalam persembunyian di kemah-Nya, Ia mengangkat aku ke atas gunung batu.",
              "Maka sekarang tegaklah kepalaku, mengatasi musuhku sekeliling aku; dalam kemah-Nya aku mau mempersembahkan korban dengan sorak-sorai; aku mau menyanyi dan bermazmur bagi Tuhan.",
              "Dengarlah, Tuhan, seruan yang kusampaikan, kasihanilah aku dan jawablah aku!",
              "Hatiku mengikuti firman-Mu: ”Carilah wajah-Ku”; maka wajah-Mu kucari, ya Tuhan.",
              "Janganlah menyembunyikan wajah-Mu kepadaku, janganlah menolak hamba-Mu ini dengan murka; Engkaulah pertolonganku, janganlah membuang aku dan janganlah meninggalkan aku, ya Allah penyelamatku!",
              "Sekalipun ayahku dan ibuku meninggalkan aku, namun Tuhan menyambut aku.",
              "Tunjukkanlah jalan-Mu kepadaku, ya Tuhan, dan tuntunlah aku di jalan yang rata oleh sebab seteruku.",
              "Janganlah menyerahkan aku kepada nafsu lawanku, sebab telah bangkit menyerang aku saksi-saksi dusta, dan orang-orang yang bernafaskan kelaliman.",
              "Sesungguhnya, aku percaya akan melihat kebaikan Tuhan di negeri orang-orang yang hidup!",
              "Nantikanlah Tuhan! Kuatkanlah dan teguhkanlah hatimu! Ya, nantikanlah Tuhan! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 63 - Jiwa yang Haus Akan Allah",
            text: [
              "Ya Allah, Engkaulah Allahku, aku mencari Engkau, jiwaku haus kepada-Mu, tubuhku rindu kepada-Mu, seperti tanah yang kering dan tandus, tiada berair.",
              "Demikianlah aku memandang kepada-Mu di tempat kudus, sambil melihat kekuatan-Mu dan kemuliaan-Mu.",
              "Sebab kasih setia-Mu lebih baik dari pada hidup; bibirku akan memegahkan Engkau.",
              "Demikianlah aku mau memuji Engkau seumur hidupku dan menaikkan tanganku demi nama-Mu.",
              "Seperti dengan lemak dan sumsum jiwaku dikenyangkan, dan dengan bibir yang bersorak-sorai mulutku memuji-muji.",
              "Apabila aku ingat kepada-Mu di tempat tidurku, merenungkan Engkau sepanjang kawal malam, –",
              "sungguh Engkau telah menjadi pertolonganku, dan dalam naungan sayap-Mu aku bersorak-sorai.",
              "Jiwaku melekat kepada-Mu, tangan kanan-Mu menopang aku.",
              "Tetapi orang-orang yang berikhtiar mencabut nyawaku, akan masuk ke bagian-bagian bumi yang paling bawah.",
              "Mereka akan diserahkan kepada kuasa pedang, mereka akan menjadi makanan anjing hutan.",
              "Tetapi raja akan bersukacita di dalam Allah; setiap orang, yang bersumpah demi Dia, akan bermegah, karena mulut orang-orang yang mengatakan dusta akan disumbat. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 67 - Doa Syukur dan Berkat Atas Segala Bangsa",
            text: [
              "Kiranya Allah mengasihani kita dan memberkati kita, kiranya Ia menyinari kita dengan wajah-Nya,",
              "supaya jalan-Mu dikenal di bumi, dan keselamatan-Mu di antara segala bangsa.",
              "Kiranya bangsa-bangsa bersyukur kepada-Mu, ya Allah; kiranya bangsa-bangsa sekalian bersyukur kepada-Mu.",
              "Tanah telah memberi hasilnya; Allah, Allah kita, memberkati kita.",
              "Allah memberkati kita; kiranya seluruh ujung bumi takut akan Dia! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 70 - Seruan Mohon Pertolongan yang Segera",
            text: [
              "Ya Allah, bersegeralah menyelamatkan aku! Tuhan, bersegeralah menolong aku!",
              "Biarlah mendapat malu dan tersipu-sipu orang-orang yang ingin mencabut nyawaku; biarlah mundur dan mendapat noda orang-orang yang menginginkan celakaku.",
              "Biarlah bergembira dan bersukacita karena Engkau semua orang yang mencari Engkau; biarlah mereka yang mencintai keselamatan dari-Mu selalu berkata: ”Allah itu besar!”",
              "Tetapi aku ini sengsara dan miskin. Ya Allah, segeralah datang kepadaku! Engkaulah penolongku dan penyelamatku; ya Tuhan, janganlah lambat! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 113 - Pujian Kepada Allah yang Meninggikan yang Rendah",
            text: [
              "Pujilah Tuhan! Pujilah, hai hamba-hamba Tuhan, pujilah nama Tuhan!",
              "Kiranya nama Tuhan dimasyhurkan, sekarang dan selama-lamanya.",
              "Dari terbitnya sampai kepada masuknya matahari terpujilah nama Tuhan.",
              "Tuhan tinggi mengatasi segala bangsa, kemuliaan-Nya mengatasi langit.",
              "Siapakah seperti Tuhan, Allah kita, yang bersemayam di tempat yang tinggi,",
              "yang merendahkan diri untuk melihat ke langit dan ke bumi?",
              "Ia menegakkan orang yang hina dari dalam debu dan mengangkat orang yang miskin dari lumpur,",
              "untuk mendudukkan dia bersama-sama dengan para bangsawan, bersama-sama dengan para bangsawan bangsanya.",
              "Ia mendudukkan perempuan yang mandul di rumah sebagai ibu anak-anak, penuh sukacita. Pujilah Tuhan! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 143 - Doa Memohon Pengampunan dan Bimbingan Roh Kudus",
            text: [
              "Ya Tuhan, dengarkanlah doaku, berilah telinga kepada permohonanku! Jawablah aku dalam kesetiaan-Mu, dalam keadilan-Mu!",
              "Janganlah memasuki pengadilan dengan hamba-Mu ini, sebab di antara yang hidup tidak ada yang benar di hadapan-Mu.",
              "Sebab musuh mengejar jiwaku, mencampakkan nyawaku ke tanah, mendudukkan aku di dalam gelap seperti orang yang sudah lama mati.",
              "Dan semangatku lemah lesu dalam diriku, hatiku tertegun di dalam dadaku.",
              "Aku teringat kepada hari-hari dahulu kala, aku merenungkan segala pekerjaan-Mu, aku memikirkan perbuatan tangan-Mu.",
              "Aku menadahkah tanganku kepada-Mu, jiwaku haus kepada-Mu seperti tanah yang tandus.",
              "Segeralah menjawab aku, ya Tuhan, sesak nafas hatiku! Janganlah sembunyikan wajah-Mu kepadaku, sehingga aku sama dengan orang-orang yang turun ke liang kubur.",
              "Perdengarkanlah kasih setia-Mu kepadaku pada waktu pagi, sebab kepada-Mu aku percaya! Beritahukanlah aku jalan yang harus kutempuh, sebab kepada-Mu kuangkat jiwaku.",
              "Lepaskanlah aku dari musuh-musuhku, ya Tuhan, pada-Mu aku berteduh!",
              "Ajarlah aku melakukan kehendak-Mu, sebab Engkaulah Allahku! Kiranya Roh-Mu yang baik menuntun aku di tanah yang rata!",
              "Oleh karena nama-Mu, ya Tuhan, hidupkanlah aku, demi keadilan-Mu keluarkanlah jiwaku dari kesesakan!",
              "Dan demi kasih setia-Mu binasakanlah musuh-musuhku, dan lenyapkanlah semua orang yang mendesak doaku, sebab aku ini hamba-Mu! ALLELUIA."
            ]
          }
        ]
      },
      {
        title: "III. Injil Kudus",
        subTitle: "Yohanes 1:1-17",
        parts: [
          {
            label: "Injil Yohanes",
            text: [
              "Kudus, kudus, kudus. Pembacaan Injil Kudus menurut Guru kita Santo Yohanes. Kiranya berkat-berkatnya beserta kita semua. Amin.",
              "Pada mulanya adalah Firman; Firman itu bersama-sama dengan Allah dan Firman itu adalah Allah.",
              "Ia pada mulanya bersama-sama dengan Allah.",
              "Segala sesuatu dijadikan oleh Dia dan tanpa Dia tidak ada suatu pun yang telah jadi dari segala yang telah dijadikan.",
              "Dalam Dia ada hidup dan hidup itu adalah terang manusia.",
              "Terang itu bercahaya di dalam kegelapan dan kegelapan itu tidak menguasainya.",
              "Datanglah seorang yang diutus Allah, namanya Yohanes;",
              "ia datang sebagai saksi untuk memberi kesaksian tentang terang itu, supaya oleh dia semua orang menjadi percaya.",
              "Ia bukan terang itu, tetapi ia harus memberi kesaksian tentang terang itu.",
              "Terang yang sesungguhnya, yang menerangi setiap orang, sedang datang ke dalam dunia.",
              "Ia telah ada di dalam dunia dan dunia dijadikan oleh-Nya, tetapi dunia tidak mengenal-Nya.",
              "Ia datang kepada milik kepunyaan-Nya, tetapi orang-orang kepunyaan-Nya itu tidak menerima-Nya.",
              "Tetapi semua orang yang menerima-Nya diberi-Nya kuasa supaya menjadi anak-anak Allah, yaitu mereka yang percaya dalam nama-Nya;",
              "orang-orang yang diperanakkan bukan dari darah atau dari daging, bukan pula secara jasmani oleh keinginan seorang laki-laki, melainkan dari Allah.",
              "Firman itu telah menjadi manusia, dan diam di antara kita, dan kita telah melihat kemuliaan-Nya, yaitu kemuliaan yang diberikan kepada-Nya sebagai Anak Tunggal Bapa, penuh kasih karunia dan kebenaran.",
              "Yohanes memberi kesaksian tentang Dia dan berseru, katanya: ”Inilah Dia, yang kumaksudkan ketika aku berkata: Kemudian dari padaku akan datang Dia yang telah mendahului aku, sebab Dia telah ada sebelum aku.”",
              "Karena dari kepenuhan-Nya kita semua telah menerima kasih karunia demi kasih karunia;",
              "sebab hukum Taurat diberikan oleh Musa, tetapi kasih karunia dan kebenaran datang oleh Yesus Kristus."
            ]
          },
          {
            label: "Kemuliaan kepada Allah selamanya. Amin.",
            text: [
              "Ten-oo aesh. tem-mok o pie-ekhr-iestos nem pe-kyot en agha-thos nem-pi epnevma etho-wab je a-ki ak-soati em-mon nai na-n.",
              "(Kami menyembah-Mu ya Kristus, bersama Bapa-Mu Yang Baik dan Roh Kudus, karena Engkau datang dan menyelamatkan kami, kasihanilah kami.)"
            ]
          }
        ]
      },
      {
        title: "IV. Litani Jam Pertama",
        subTitle: "Respon dan Doa Syafaat",
        parts: [
          {
            label: "Litani 1",
            text: [
              "Ya Terang yang Benar, yang menyinari setiap orang yang datang ke dunia.",
              "Engkau datang ke dunia karena kasih-Mu kepada manusia, dan semua ciptaan bersuka-ria atas kedatangan-Mu.",
              "Engkau menyelamatkan leluhur kami Adam dari pencobaan dan ibu kami Hawa dari rasa sakit kematian, dan memberikan kami roh supaya menjadi anak-anak-Mu.",
              "Kami memuji Engkau, kami memuliakan Engkau dan berkata:",
              "Doksa patri ke eiyo ke agi-yo pnevmaty",
              "(Kemuliaan kepada Bapa dan Putra dan Roh Kudus)"
            ]
          },
          {
            label: "Litani 2",
            text: [
              "Bila cahaya pagi bersinar, Ya Kristus Allah kami, Terang Yang Benar, biarlah perasaan dan pikiran yang terang menyinari kami,",
              "dan janganlah kami diliputi oleh kegelapan hawa nafsu supaya kami dapat memuji-Mu bersama Daud, dan berkata:",
              "Mataku terjaga sepanjang malam, supaya aku dapat merenungkan Firman-Mu.",
              "Dengarlah suara kami menurut rahmat-Mu yang besar, dan selamatkan kami, Ya TUHAN Allah, dengan belas kasih-Mu.",
              "Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen.",
              "(Sekarang dan selama-lamanya. Amin.)"
            ]
          },
          {
            label: "Litani 3",
            text: [
              "Engkaulah Bunda dari Terang yang dihormati. Di seluruh bumi semua orang memberikan kemuliaan kepadamu, Theotokos, surga kedua.",
              "Karena engkaulah terang dan bunga yang tidak berubah, Bunda Perawan selamanya, karena Bapa memilih engkau, Roh Kudus menaungi engkau dan Putra yang berkenan dilahirkan dari rahimmu.",
              "Kiranya engkau memohon kepada Dia untuk menyelamatkan dunia yang Dia ciptakan, dan membebaskannya dari kesukaran.",
              "Marilah kita menyanyikan kidung baru dan memuliakan Dia, sekarang, selalu, dan sepanjang masa. Amin."
            ]
          }
        ]
      },
      {
        title: "V. GLORIA",
        subTitle: "Pujian Malaikat",
        parts: [
          {
            label: "GLORIA (Pujian Malaikat)",
            text: [
              "Marilah kita menyanyi bersama malaikat:",
              "Kemuliaan kepada Allah di tempat mahatinggi dan damai di bumi kepada orang yang berkenan kepada-Nya.",
              "Kami memuji Dikau, kami meluhurkan Dikau, kami menyembah Dikau, kami memuliakan Dikau, kami bersyukur kepada-Mu karena kemuliaan-Mu yang besar, Ya TUHAN Allah, Raja surgawi, Allah Bapa yang Maha Kuasa.",
              "Ya Tuhan Yesus Kristus, Putra Yang Tunggal dan Roh Kudus.",
              "Ya TUHAN Allah, Anak Domba Allah, Putera Bapa, yang menghapus dosa dunia, kasihanilah kami. O Engkau yang menghapus dosa dunia, kabulkanlah doa kami. Engkau yang duduk di sisi Bapa, kasihanilah kami.",
              "Karena hanya Engkaulah Kudus, hanya Engkaulah Tuhan, hanya Engkaulah Mahatinggi, Ya Yesus Kristus, bersama Roh Kudus, dalam kemuliaan Allah Bapa. Amin.",
              "Aku memuliakan Engkau setiap hari, dan memuji nama-Mu yang kudus selama-lamanya. Amin.",
              "Dari tengah malam jiwaku bangun pagi-pagi mencari-Mu, Ya Allahku, karena Perintah-Mu adalah terang yang menyinari dunia.",
              "Aku akan merenungkan jalan-jalan-Mu, karena Engkau menolong aku. Pagi-pagi, Tuhanku, Engkau akan mendengar suaraku. Esok hari, aku berdiri di hadapan-Mu dan Engkau akan melihat aku."
            ]
          }
        ]
      },
      {
        title: "VI. TRISAGION",
        subTitle: "Doa Kudus",
        parts: [
          {
            label: "TRISAGION (Doa Kudus)",
            text: [
              "Allah Kudus, Maha Kuasa Kudus, Kekal Kudus, yang disalib karena kita, kasihanilah kami.",
              "Allah Kudus, Maha Kuasa Kudus, Kekal Kudus, yang bangkit dari kematian dan naik ke surga, kasihanilah kami.",
              "Kemuliaan kepada Bapa dan Putra dan Roh Kudus sekarang dan selamanya dari segala abad hingga segala abad. Amin.",
              "Ya, Tritunggal Maha Kudus, kasihanilah kami. (3X)",
              "Ya, Tuhan, ampunilah dosa-dosa kami. Ya, Tuhan, ampunilah pelanggaran kami. Ya, Tuhan, ampunilah kesalahan kami.",
              "Ya, Tuhan, sertailah mereka yang sakit, sembuhkanlah mereka dalam nama-Mu yang kudus, ya Tuhan, berilah istirahat bagi jiwa-jiwa yang telah kembali kepada-Mu.",
              "Ya, Tuhan Engkau yang tanpa dosa, kasihanilah kami. Ya, Tuhan Engkau yang tanpa dosa, topanglah kami dan terimalah doa-doa kami. Karena bagi-Mu lah kemuliaan, hormat dan kekudusan.",
              "Tuhan kasihanilah kami, Tuhan kasinahilah kami, Tuhan berkatilah kami. Amin."
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          },
          {
            label: "Salam Bagimu",
            text: [
              "Salam bagimu, kami mohon kepadamu, ya Santa, penuh rahmat, perawan selamanya, Theotokos, Bunda Allah, Bunda Kristus, naikkan doamu kepada Anakmu yang kau cintai, kiranya Dia mengampuni dosa kami.",
              "Salam bagi Perawan Kudus yang telah memberikan kita Terang Sejati, Kristus Allah kami. Mohonlah kepada Tuhan demi kami, kiranya Ia mengasihani jiwa kami dan mengampuni dosa kami.",
              "Ya Perawan Maria, Theotokos, Bunda Allah, pembela manusia yang setia, syafaatkanlah kami di hadapan Kristus yang engkau lahirkan, kiranya Dia mengampuni dosa-dosa kami.",
              "Salam bagimu, ya Perawan dan Ratu yang benar, salam demi kebanggaan manusia, yang melahirkan Imanuel. Kami mohon ingatlah kami pembela yang setia, di hadapan Tuhan Yesus Kristus, kiranya Ia mengampuni dosa-dosa kami."
            ]
          }
        ]
      },
      {
        title: "VII. PENGAKUAN IMAN",
        subTitle: "Pengantar",
        parts: [
          {
            label: "Pengantar Pengakuan Iman",
            text: [
              "Kami menghormatimu, Ibu dari Terang Sejati. Kami memuliakanmu, ya Santa, Theotokos, Bunda Allah, karena engkau telah melahirkan Juruselamat dunia yang datang dan menyelamatkan jiwa kami.",
              "Kemuliaan bagi-Mu, Tuan kami, Raja kami, Yesus Kristus, kebanggaan para rasul, mahkota kaum martir, kesukaan orang benar, keteguhan gereja, pengampunan akan dosa.",
              "Kami mewartakan Tritunggal Maha Kudus, Satu Allah. Kami menyembah Dia. Kami memuliakan Dia. Tuhan kasihanilah kami, Tuhan kasihanilah kami, Tuhan berkatilah kami. Amin."
            ]
          },
          {
            label: "Pengakuan Iman ORTODOKS",
            text: [
              "Kami percaya kepada Allah Yang Esa, Sang Bapa, Pantokrator (Yang Mahakuasa), Pencipta dari langit dan bumi, dan dari segala sesuatu yang kelihatan dan tidak kelihatan.",
              "Kami percaya kepada Tuhan yang Esa, Yesus Kristus Putra Allah yang tunggal, yang lahir dari Sang Bapa sebelum segala masa.",
              "Terang dari Terang, Allah sejati dari Allah sejati, dilahirkan bukan diciptakan, sehakikat dengan Sang Bapa, yang oleh-Nya segala sesuatu diciptakan.",
              "Dan demi kita manusia dan demi keselamatan kita, turun dari surga dan menjelma oleh Roh Kudus, dilahirkan oleh Perawan Maria dan menjadi manusia.",
              "Dan Ia disalibkan untuk kita pada zaman Pontius Pilatus, menderita sampai wafat dan dimakamkan, dan pada hari ketiga, Dia bangkit dari antara orang mati sesuai dengan Alkitab, lalu naik ke surga; duduk di sebelah kanan Bapa-Nya, dan Ia akan kembali dalam kemuliaan-Nya untuk mengadili orang yang hidup dan yang mati, dan Kerajaan-Nya kekal tidak berakhir.",
              "Ya, kami juga percaya kepada Roh Kudus, Tuhan yang menghidupkan, yang keluar dari Sang Bapa, dan bersama Sang Bapa dan Sang Putra disembah dan dimuliakan, yang bersabda melalui para nabi.",
              "Dan dalam gereja yang satu, kudus, katolik (universal) dan apostolik. Kami mengakui satu baptisan untuk pengampunan dosa.",
              "Kami menantikan kebangkitan orang mati dan kehidupan dimasa yang akan datang, Amin"
            ]
          },
          {
            label: "Kyrie Eleison",
            text: [
              "Ya Tuhan, dengarlah kami, kasihanilah kami, dan ampunilah dosa-dosa kami. Amin.",
              "Tuhan kasihanilah (Kyrie Eleison) 41 kali."
            ]
          }
        ]
      },
      {
        title: "VI. PENUTUP",
        subTitle: "Doa Penutup Keseluruhan",
        parts: [
          {
            label: "KUDUS KUDUS KUDUS",
            text: [
              "Kudus, kudus, kuduslah Tuhan pemimpin pasukan malaikat, Sabaoth. Surga dan Bumi penuh dengan hormat dan kemuliaan-Mu. Kasihanilah kami, Ya Allah Bapa yang Maha Kuasa, Pantokrator.",
              "Ya Tritunggal Maha Kudus kasihanilah kami.",
              "Ya Tuhan, Allah pemimpin pasukan malaikat, sertailah kami. Karena kami tidak mempunyai penolong di dalam kesukaran dan kemalangan, tetapi hanya Engkau saja.",
              "Ya Allah bebaskan, ampuni dan hapuskanlah dosa yang telah kami perbuat secara sengaja dan tidak sengaja, sadar dan tidak-sadar, yang tersembunyi dan yang terlihat.",
              "Ya Tuhan ampunilah kami demi nama-Mu yang Kudus yang dipanggil atas kami, menurut belas kasihan-Mu dan bukan menurut dosa-dosa kami."
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          },
          {
            label: "ABSOLUSI Pertama",
            text: [
              "Ya Tuhan, Allah pemimpin pasukan malaikat, yang telah ada sejak dahulu kala dan tetap ada selamanya, Engkau menciptakan matahari untuk menerangi hari, dan malam untuk beristirahat bagi semua orang.",
              "Kami bersyukur kepada-Mu Raja kami Yang Kekal, karena Engkau menyertai kami melewati malam dengan damai dan membawa kami kepada permulaan hari ini.",
              "Karena itu kami memohon kepada Engkau, Raja Kekal, biarlah terang-Mu menyinari kami, dan biarlah Engkau menerangi kami dengan pengertian terang ilahi-Mu.",
              "Jadikanlah kami anak-anak terang, anak-anak siang, supaya kami dapat menyelesaikan hari ini dalam kebenaran, kesucian dan kelakuan yang baik, dan kami dapat menyelesaikan sisa hidup kami tanpa cela, dengan anugerah, belas kasihan dan kasih kepada manusia dari Anak-Mu Yang Tunggal, Yesus Kristus, dan dengan karunia Roh Kudus, sekarang dan selama-lamanya. Amin."
            ]
          },
          {
            label: "ABSOLUSI Kedua",
            text: [
              "Ya Allah yang menyebabkan cahaya bersinar, yang mengizinkan sinar matahari bersinar atas orang yang benar dan jahat, yang menciptakan terang yang menerangi dunia, terangilah pikiran kami, hati kami dan pengertian kami.",
              "Ya, Tuhan atas segalanya, berikanlah kami pada hari ini kemampuan untuk menyenangkan Engkau. Lindungilah kami dari yang jahat, dari setiap dosa dan setiap musuh, melalui Yesus Kristus Tuhan kami, yang dimuliakan bersama Engkau dan bersama Roh Kudus Pemberi kehidupan, dan sehakikat dengan-Mu, sekarang dan selama-lamanya, dari segala abad hingga segala abad. Amin."
            ]
          },
          {
            label: "DOA PENUTUP",
            text: [
              "Kasihanilah kami, ya Allah, kasihanilah kami, Engkau yang setiap waktu dan saat selalu disembah dan dimuliakan di bumi dan di surga.",
              "Kristus, Tuhan kami yang baik, yang penuh kesabaran, yang melimpah dalam kemurahan, dan besar dalam belas kasihan; yang mencintai orang benar dan berbelas kasihan terhadap orang berdosa, terutama dirikulah yang paling berdosa. Engkau tidak menghendaki kematian orang berdosa, melainkan agar dia bertobat dan hidup, memanggil semua orang untuk diselamatkan, supaya mereka memperoleh janji akan hal-hal yang baik di masa yang akan datang.",
              "Tuhan, terimalah doa kami pada jam ini dan setiap waktu. Permudahlah hidup kami, dan tuntunlah kami untuk bertindak menurut perintah-Mu. Kuduskanlah jiwa kami. Bersihkanlah tubuh kami. Bimbinglah pikiran kami. Murnikanlah keinginan kami. Sembuhkanlah sakit kami. Ampunilah dosa-dosa kami. Lepaskanlah kami dari segala kesedihan dan penderitaan batin.",
              "Kelilingilah kami dengan malaikat-Mu yang kudus supaya kami dijaga dan dituntun oleh mereka, dan mencapai kesatuan iman dan pengetahuan mengenai kemuliaan-Mu yang tidak dapat dimengerti dan tanpa batas, karena Engkau mulia sampai selama-lamanya. Amin.",
              "(Lanjutkan dengan doa pribadi masing-masing dan diakhiri dengan Doa Bapa Kami)"
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "terce",
    title: "Jam Ketiga",
    titleEn: "Terce",
    timeText: "09:00 (Pagi)",
    theme: "Turunnya Roh Kudus dan Penghakiman Kristus",
    description: "Mengenang peristiwa ketika Roh Kudus turun atas para rasul pada hari Pentakosta, serta jam ketika Tuhan Yesus diadili oleh Pilatus demi menebus kita.",
    sections: [
      {
        title: "I. Pendahuluan (Pengantar Doa)",
        subTitle: "Doa Pembuka & Doa Syukur",
        parts: [
          { label: "Tanda Salib", text: corePrayers.tandaSalib.text },
          { label: "Bapa Kami", text: corePrayers.doaTuhan.text },
          { label: "Doa Ucapan Syukur", text: corePrayers.doaSyukur.text },
          { label: "Mazmur 51", text: corePrayers.mazmur51.text }
        ]
      },
      {
        title: "II. Mazmur-Mazmur Agpeya",
        subTitle: "Mazmur Pilihan Jam Ketiga",
        parts: [
          {
            label: "Ucapan Umat",
            text: [
              "Doa Jam Ketiga yang diberkati ini kita persembahkan kepada Kristus Raja kita dan Allah kita, memohon agar Dia mengampuni segala dosa kita.",
              "Dari Mazmur Daud, bapa kita, nabi dan raja, semoga berkat-berkatnya menyertai kita semua. Amin."
            ]
          },
          {
            label: "Mazmur 20 - Nyanyian Syukur atas Kemenangan",
            text: [
              "Kiranya Tuhan menjawab engkau pada waktu kesesakan! Kiranya nama Allah Yakub membentengi engkau!",
              "Kiranya dikirimkan-Nya bantuan kepadamu dari tempat kudus dan disokong-Nya engkau dari Sion.",
              "Kiranya diingat-Nya segala korban persembahanmu, dan disukai-Nya korban bakaranmu. Sela",
              "Kiranya diberikan-Nya kepadamu apa yang kaukehendaki dan dijadikan-Nya berhasil apa yang kaurancangkan.",
              "Kami mau bersorak-sorai tentang kemenanganmu dan mengangkat panji-panji demi nama Allah kita; kiranya Tuhan memenuhi segala permintaanmu.",
              "Sekarang aku tahu, bahwa Tuhan memberi kemenangan kepada orang yang diurapi-Nya dan menjawabnya dari sorga-Nya yang kudus dengan kemenangan yang gilang-gemilang oleh tangan kanan-Nya.",
              "Orang ini memegahkan kereta dan orang itu memegahkan kuda, tetapi kita bermegah dalam nama Tuhan, Allah kita.",
              "Mereka rebah dan jatuh, tetapi kita bangun berdiri dan tetap tegak.",
              "Ya Tuhan, berikanlah kemenangan kepada raja! Jawablah kiranya kami pada waktu kami berseru! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 23 - Penggembalaan Agung",
            text: [
              "Tuhan adalah gembalaku, takkan kekurangan aku.",
              "Ia membaringkan aku di padang yang berumput hijau, Ia membimbing aku ke air yang tenang;",
              "Ia menyegarkan jiwaku. Ia menuntun aku di jalan yang benar oleh karena nama-Nya.",
              "Sekalipun aku berjalan dalam lembah kekelaman, aku tidak takut bahaya, sebab Engkau besertaku; gada-Mu dan tongkat-Mu, itulah yang menghibur aku.",
              "Engkau menyediakan hidangan bagiku, di hadapan lawanku; Engkau mengurapi kepalaku dengan minyak; pialaku penuh melimpah.",
              "Kebajikan dan kemurahan belaka akan mengikuti aku, seumur hidupku; dan aku akan diam dalam rumah Tuhan sepanjang masa. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 24 - Raja Kemuliaan Masuk",
            text: [
              "Tuhanlah yang empunya bumi serta segala isinya, dan dunia serta yang diam di dalamnya.",
              "Sebab Dialah yang mendasarkannya di atas lautan dan menegakkannya di atas sungai-sungai.",
              "”Siapakah yang boleh naik ke atas gunung Tuhan? Siapakah yang boleh berdiri di tempat-Nya yang kudus?”",
              "”Orang yang bersih tangannya dan murni hatinya, yang tidak menyerahkan dirinya kepada penipuan, dan yang tidak bersumpah palsu.",
              "Dialah yang akan menerima berkat dari Tuhan dan keadilan dari Allah yang menyelamatkan dia.",
              "Itulah angkatan orang-orang yang menanyakan Dia, yang mencari wajah-Mu, ya Allah Yakub.” Sela",
              "Angkatlah kepalamu, hai pintu-pintu gerbang, dan terangkatlah kamu, hai pintu-pintu yang berabad-abad, supaya masuk Raja Kemuliaan!",
              "”Siapakah itu Raja Kemuliaan?” ”Tuhan, jaya dan perkasa, Tuhan, perkasa dalam peperangan!”",
              "Angkatlah kepalamu, hai pintu-pintu gerbang, dan terangkatlah kamu, hai pintu-pintu yang berabad-abad, supaya masuk Raja Kemuliaan!",
              "”Siapakah Dia itu Raja Kemuliaan?” ”Tuhan semesta alam, Dialah Raja Kemuliaan! ALLELUIA.”"
            ]
          },
          {
            label: "Mazmur 26 - Mohon Dibenarkan TUHAN",
            text: [
              "Berilah keadilan kepadaku, ya Tuhan, sebab aku telah hidup dalam ketulusan; kepada Tuhan aku percaya dengan tidak ragu-ragu.",
              "Ujilah aku, ya Tuhan, dan cobalah aku; selidikilah batinku dan hatiku.",
              "Sebab mataku tertuju pada kasih setia-Mu, dan aku hidup dalam kebenaran-Mu.",
              "Aku tidak duduk dengan penipu, dan dengan orang munafik aku tidak bergaul;",
              "aku benci kepada perkumpulan orang yang berbuat jahat, dan dengan orang fasik aku tidak duduk.",
              "Aku membasuh tanganku tanda tak bersalah, lalu berjalan mengelilingi mezbah-Mu, ya Tuhan,",
              "sambil memperdengarkan nyanyian syukur dengan nyaring, dan menceritakan segala perbuatan-Mu yang ajaib.",
              "Tuhan, aku cinta pada rumah kediaman-Mu dan pada tempat kemuliaan-Mu bersemayam.",
              "Janganlah mencabut nyawaku bersama-sama orang berdosa, atau hidupku bersama-sama orang penumpah darah,",
              "yang pada tangannya melekat perbuatan mesum, dan yang tangan kanannya menerima suapan.",
              "Tetapi aku ini hidup dalam ketulusan; bebaskanlah aku dan kasihanilah aku.",
              "Kakiku berdiri di tanah yang rata; aku mau memuji Tuhan dalam jemaah. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 29 - Kebesaran Allah",
            text: [
              "Kepada Tuhan, hai penghuni sorgawi, kepada Tuhan sajalah kemuliaan and kekuatan!",
              "Berilah kepada Tuhan kemuliaan nama-Nya, sujudlah kepada Tuhan dengan berhiaskan kekudusan!",
              "Suara Tuhan di atas air, Allah yang mulia mengguntur, Tuhan di atas air yang besar.",
              "Suara Tuhan penuh kekuatan, suara Tuhan penuh semarak.",
              "Suara Tuhan mematahkan pohon aras, bahkan, Tuhan menumbangkan pohon aras Libanon.",
              "Ia membuat gunung Libanon melompat-lompat seperti anak lembu, dan gunung Siryon seperti anak banteng.",
              "Suara Tuhan menyemburkan nyala api.",
              "Suara Tuhan membuat padang gurun gemetar, Tuhan membuat padang gurun Kadesh gemetar.",
              "Suara Tuhan membuat beranak rusa betina yang mengandung, bahkan, hutan digundulinya; dan di dalam bait-Nya setiap orang berseru: ”Hormat!”",
              "Tuhan bersemayam di atas air bah, Tuhan bersemayam sebagai Raja untuk selama-lamanya.",
              "Tuhan kiranya memberikan kekuatan kepada umat-Nya, Tuhan kiranya memberkati umat-Nya dengan sejahtera! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 30 - Selamat dari Bahaya",
            text: [
              "Aku akan memuji Engkau, ya Tuhan, sebab Engkau telah menarik aku ke atas, dan tidak memberi musuh-musuhku bersukacita atas aku.",
              "Tuhan, Allahku, kepada-Mu aku berteriak minta tolong, dan Engkau telah menyembuhkan aku.",
              "Tuhan, Engkau mengangkat aku dari dunia orang mati, Engkau menghidupkan aku di antara mereka yang turun ke liang kubur.",
              "Nyanyikanlah mazmur bagi Tuhan, hai orang-orang yang dikasihi-Nya, dan persembahkanlah syukur kepada nama-Nya yang kudus!",
              "Sebab sesaat saja Ia murka, tetapi seumur hidup Ia murah hati; sepanjang malam ada tangisan, menjelang pagi terdengar sorak-sorai.",
              "Dalam kesenanganku aku berkata: ”Aku takkan goyah untuk selama-lamanya!”",
              "Tuhan, oleh karena Engkau berkenan, Engkau telah menempatkan aku di atas gunung yang kokoh; ketika Engkau menyembunyikan wajah-Mu, aku terkejut.",
              "Kepada-Mu, ya Tuhan, aku berseru, dan kepada Tuhanku aku memohon:",
              "”Apakah untungnya kalau darahku tertumpah, kalau aku turun ke dalam lobang kubur? Dapatkah debu bersyukur kepada-Mu dan memberitakan kesetiaan-Mu?”",
              "”Dengarlah, Tuhan, dan kasihanilah aku, Tuhan, jadilah penolongku!”",
              "Aku yang meratap telah Kauubah menjadi orang yang menari-nari, kain kabungku telah Kaubuka, pinggangku Kauikat dengan sukacita,",
              "supaya jiwaku menyanyikan mazmur bagi-Mu dan jangan berdiam diri. Tuhan, Allahku, untuk selama-lamanya aku mau menyanyikan syukur bagi-Mu. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 34 - Dalam Perlindungan TUHAN",
            text: [
              "Aku hendak memuji TUHAN pada segala waktu; puji-pujian kepada-Nya tetap di dalam mulutku.",
              "Karena TUHAN jiwaku bermegah; biarlah orang-orang yang rendah hati mendengarnya dan bersukacita.",
              "Muliakanlah TUHAN bersama-sama dengan aku, marilah kita bersama-sama memasyhurkan nama-Nya!",
              "Aku telah mencari TUHAN, lalu Ia menjawab aku, dan melepaskan aku dari segala kegentaranku.",
              "Tujukanlah pandanganmu kepada-Nya, maka mukamu akan berseri-seri, dan tidak akan malu tersipu-sipu.",
              "Orang yang tertindas ini berseru, dan TUHAN mendengar; Ia menyelamatkan dia dari segala kesesakannya.",
              "Malaikat TUHAN berkemah di sekeliling orang-orang yang takut akan Dia, lalu meluputkan mereka.",
              "Kecaplah dan lihatlah, betapa baiknya TUHAN itu! Berbahagialah orang yang berlindung pada-Nya!",
              "Takutlah akan TUHAN, hai orang-orang-Nya yang kudus, sebab tidak berkekurangan orang yang takut akan Dia!",
              "Singa-singa muda merana kelaparan, tetapi orang-orang yang mencari TUHAN, tidak kekurangan sesuatu pun yang baik.",
              "Marilah anak-anak, dengarkanlah aku, takut akan TUHAN akan kuajarkan kepadamu!",
              "Siapakah orang yang menyukai hidup, yang mengingini umur panjang untuk menikmati yang baik?",
              "Jagalah lidahmu terhadap yang jahat dan bibirmu terhadap ucapan-ucapan yang menipu;",
              "jauhilah yang jahat dan lakukanlah yang baik, carilah perdamaian dan berusahalah mendapatkannya!",
              "Mata TUHAN tertuju kepada orang-orang benar, dan telinga-Nya kepada teriak mereka minta tolong;",
              "wajah TUHAN menentang orang-orang yang berbuat jahat untuk melenyapkan ingatan kepada mereka dari muka bumi.",
              "Apabila orang-orang benar itu berseru-seru, maka TUHAN mendengar, dan melepaskan mereka dari segala kesesakannya.",
              "Tuhan itu dekat kepada orang-orang yang patah hati, dan Ia menyelamatkan orang-orang yang remuk jiwanya.",
              "Kemalangan orang benar banyak, tetapi TUHAN melepaskan dia dari semuanya itu;",
              "Ia melindungi segala tulangnya, tidak satu pun yang patah.",
              "Kemalangan akan mematikan orang fasik, dan siapa yang membenci orang benar akan menanggung hukuman.",
              "TUHAN membebaskan jiwa hamba-hamba-Nya, dan semua orang yang berlindung pada-Nya tidak akan menanggung hukuman. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 41 - Doa Minta Penyembuhan",
            text: [
              "Berbahagialah orang yang memperhatikan orang lemah! Tuhan akan meluputkan dia pada waktu celaka.",
              "Tuhan akan melindungi dia dan memelihara nyawanya, sehingga ia disebut berbahagia di bumi; Engkau takkan membiarkan dia dipermainkan musuhnya!",
              "Tuhan membantu dia di ranjangnya waktu sakit; di tempat tidurnya Kaupulihkannya sama sekali dari sakitnya.",
              "Kalau aku, kataku: ”Tuhan, kasihanilah aku, sembuhkanlah aku, sebab terhadap Engkaulah aku berdosa!”",
              "Musuhku mengatakan yang jahat tentang aku: ”Bilakah ia mati, dan namanya hilang lenyap?”",
              "Orang yang datang menjenguk, berkata dusta; hatinya penuh kejahatan, lalu ia keluar menceritakannya di jalan.",
              "Semua orang yang benci kepadaku berbisik-bisik bersama-sama tentang aku, mereka merancangkan yang jahat terhadap aku: ”Penyakit jahanam telah menimpa dia, sekali ia berbaring, takkan bangun-bangun lagi.”",
              "Bahkan sahabat karibku yang kupercayai, yang makan rotiku, telah mengangkat tumitnya terhadap aku.",
              "Tetapi Engkau, ya Tuhan, kasihanilah aku dan tegakkanlah aku, maka aku hendak mengadakan pembalasan terhadap mereka.",
              "Dengan demikian aku tahu, bahwa Engkau berkenan kepadaku, apabila musuhku tidak bersorak-sorai karena aku.",
              "Tetapi aku, Engkau menopang aku karena ketulusanku, Engkau membuat aku tegak di hadapan-Mu untuk selama-lamanya.",
              "Terpujilah Tuhan, Allah Israel, dari selama-lamanya sampai selama-lamanya! Amin, ya amin. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 43 - Mohon Keadilan TUHAN",
            text: [
              "Berilah keadilan kepadaku, ya Allah, dan perjuangkanlah perkaraku terhadap kaum yang tidak saleh! Luputkanlah aku dari orang penipu dan orang curang!",
              "Sebab Engkaulah Allah tempat pengungsianku. Mengapa Engkau membuang aku? Mengapa aku harus hidup berkabung di bawah impitan musuh?",
              "Suruhlah terang-Mu and kesetiaan-Mu datang, supaya aku dituntun dan dibawa ke gunung-Mu yang kudus dan ke tempat kediaman-Mu!",
              "Maka aku dapat pergi ke mezbah Allah, menghadap Allah, yang adalah sukacitaku dan kegembiraanku, dan bersyukur kepada-Mu dengan kecapi, ya Allah, ya Allahku!",
              "Mengapa engkau tertekan, hai jiwaku, dan mengapa engkau gelisah di dalam diriku? Berharaplah kepada Allah! Sebab aku bersyukur lagi kepada-Nya, penolongku dan Allahku! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 45 - Nyanyian Pernikahan Raja",
            text: [
              "Hatiku meluap dengan kata-kata indah, aku hendak menyampaikan sajakku kepada raja; lidahku ialah pena seorang jurutulis yang mahir.",
              "Engkau yang terelok di antara anak-anak manusia, kemurahan tercurah pada bibirmu, sebab itu Allah telah memberkati engkau untuk selama-lamanya.",
              "Ikatlah pedangmu pada pinggang, hai pahlawan, dalam keagunganmu dan semarakmu!",
              "Dalam semarakmu itu majulah demi kebenaran, perikemanusiaan dan keadilan! Biarlah tangan kananmu mengajarkan engkau perbuatan-perbuatan yang dahsyat!",
              "Anak-anak panahmu tajam, menembus jantung musuh raja; bangsa-bangsa jatuh di bawah kakimu.",
              "Takhtamu kepunyaan Allah, tetap untuk seterusnya dan selamanya, dan tongkat kerajaanmu adalah tongkat kebenaran.",
              "Engkau mencintai keadilan dan membenci kefasikan; sebab itu Allah, Allahmu, telah mengurapi engkau dengan minyak sebagai tanda kesukaan, melebihi teman-teman sekutumu.",
              "Segala pakaianmu berbau mur, gaharu dan cendana; dari istana gading permainan kecapi menyukakan engkau;",
              "di antara mereka yang disayangi terdapat puteri-puteri raja, di sebelah kananmu berdiri permaisuri berpakaian emas dari Ofir.",
              "Dengarlah, hai puteri, lihatlah, dan sendengkanlah telingamu, lupakanlah bangsamu dan seisi rumah ayahmu!",
              "Biarlah raja menjadi gairah karena keelokanmu, sebab dialah tuanmu! Sujudlah kepadanya!",
              "Puteri Tirus datang dengan pemberian-pemberian; orang-orang kaya di antara rakyat akan mengambil muka kepadamu.",
              "Keindahan belaka puteri raja itu di dalam, pakaiannya berpakankan emas.",
              "Dengan pakaian bersulam berwarna-warna ia dibawa kepada raja; anak-anak dara mengikutinya, yakni teman-temannya, yang didatangkan untuk dia.",
              "Dengan sukacita dan sorak-sorai mereka dibawa, mereka masuk ke dalam istana raja.",
              "Para bapa leluhurmu hendaknya diganti oleh anak-anakmu nanti; engkau akan mengangkat mereka menjadi pembesar di seluruh bumi.",
              "Aku mau memasyhurkan namamu turun-temurun; sebab itu bangsa-bangsa akan bersyukur kepadamu untuk seterusnya dan selamanya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 46 - Allah Kota Benteng Kita",
            text: [
              "Allah itu bagi kita tempat perlindungan dan kekuatan, sebagai penolong dalam kesesakan sangat terbukti.",
              "Sebab itu kita tidak akan takut, sekalipun bumi berubah, sekalipun gunung-gunung goncang di dalam laut;",
              "sekalipun ribut dan berbuih airnya, sekalipun gunung-gunung goyang oleh geloranya. Sela",
              "Kota Allah, kediaman Yang Mahatinggi, disukakan oleh aliran-aliran sebuah sungai.",
              "Allah ada di dalamnya, kota itu tidak akan goncang; Allah akan menolongnya menjelang pagi.",
              "Bangsa-bangsa ribut, kerajaan-kerajaan goncang, Ia memperdengarkan suara-Nya, dan bumi pun hancur.",
              "Tuhan semesta alam menyertai kita, kota benteng kita ialah Allah Yakub. Sela",
              "Pergilah, pandanglah pekerjaan Tuhan, yang mengadakan pemusnahan di bumi,",
              "yang menghentikan peperangan sampai ke ujung bumi, yang mematahkan busur panah, menumpulkan tombak, membakar kereta-kereta perang dengan api!",
              "”Diamlah dan ketahuilah, bahwa Akulah Allah! Aku ditinggikan di antara bangsa-bangsa, ditinggikan di bumi!”",
              "Tuhan semesta alam menyertai kita, kota benteng kita ialah Allah Yakub. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 47 - Allah Raja Seluruh Bumi",
            text: [
              "Hai segala bangsa, bertepuktanganlah, elu-elukanlah Allah dengan sorak-sorai!",
              "Sebab Tuhan, Yang Mahatinggi, adalah dahsyat, Raja yang besar atas seluruh bumi.",
              "Ia menaklukkan bangsa-bangsa ke bawah kuasa kita, suku-suku bangsa ke bawah kaki kita,",
              "Ia memilih bagi kita tanah pusaka kita, kebanggaan Yakub yang dikasihi-Nya. Sela",
              "Allah telah naik dengan diiringi sorak-sorai, ya Tuhan itu, dengan diiringi bunyi sangkakala.",
              "Bermazmurlah bagi Allah, bermazmurlah, bermazmurlah bagi Raja kita, bermazmurlah!",
              "Sebab Allah adalah Raja seluruh bumi, bermazmurlah dengan nyanyian pengajaran!",
              "Allah memerintah sebagai raja atas bangsa-bangsa, Allah bersemayam di atas takhta-Nya yang kudus.",
              "Para pemuka bangsa-bangsa berkumpul sebagai umat Allah Abraham. Sebab Allah yang empunya perisai-perisai bumi; Ia sangat dimuliakan. ALLELUIA."
            ]
          }
        ]
      },
      {
        title: "III. Injil Kudus",
        subTitle: "Yohanes 14:26-15:4",
        parts: [
          {
            label: "Injil Yohanes",
            text: [
              "Kudus, kudus, kudus. Pembacaan Injil Kudus menurut guru kita Santo Yohanes. Kiranya berkat-berkatnya beserta kita semua. Amin.",
              "tetapi Penghibur, yaitu Roh Kudus, yang akan diutus oleh Bapa dalam nama-Ku, Dialah yang akan mengajarkan segala sesuatu kepadamu dan akan mengingatkan kamu akan semua yang telah Kukatakan kepadamu.",
              "Damai sejahtera Kutinggalkan bagimu. Damai sejahtera-Ku Kuberikan kepadamu, dan apa yang Kuberikan tidak seperti yang diberikan oleh dunia kepadamu. Janganlah gelisah dan gentar hatimu. Kamu telah mendengar, bahwa Aku telah berkata kepadamu: Aku pergi, tetapi Aku datang kembali kepadamu. Sekiranya kamu mengasihi Aku, kamu tentu akan bersukacita karena Aku pergi kepada Bapa-Ku, sebab Bapa lebih besar dari pada Aku. Dan sekarang juga Aku mengatakannya kepadamu sebelum hal itu terjadi, supaya kamu percaya, apabila hal itu terjadi. Tidak banyak lagi Aku berkata-kata dengan kamu, sebab penguasa dunia ini datang dan ia tidak berkuasa sedikit pun atas diri-Ku. Tetapi supaya dunia tahu, bahwa Aku mengasihi Bapa dan bahwa Aku melakukan segala sesuatu seperti yang diperintahkan Bapa kepada-Ku, bangunlah, marilah kita pergi dari sini.",
              "Akulah pokok anggur yang benar dan Bapa-Kulah pengusahanya. Setiap ranting pada-Ku yang tidak berbuah, dipotong-Nya dan setiap ranting yang berbuah, dibersihkan-Nya, supaya ia lebih banyak berbuah. Kamu memang sudah bersih karena firman yang telah Kukatakan kepadamu. Tinggallah di dalam Aku dan Aku di dalam kamu. Sama seperti ranting tidak dapat berbuah dari dirinya sendiri, kalau ia tidak tinggal pada pokok anggur, demikian juga kamu tidak berbuah, jikalau kamu tidak tinggal di dalam Aku."
            ]
          },
          {
            label: "Kemuliaan kepada Allah selamanya. Amin.",
            text: [
              "Ten-oo aesh. tem-mok o pie-ekhr-iestos nem pe-kyot en agha-thos nem-pi epnevma etho-wab je a-ki ak-soati em-mon nai na-n.",
              "(Kami menyembah-Mu ya Kristus, bersama Bapa-Mu Yang Baik dan Roh Kudus, karena Engkau datang dan menyelamatkan kami, kasihanilah kami.)"
            ]
          }
        ]
      },
      {
        title: "IV. Litani Jam Ketiga",
        subTitle: "Rahmat Roh Kudus",
        parts: [
          {
            label: "Litani Pertama",
            text: [
              "Ya Tuhan yang baik, janganlah Kau ambil Roh Kudus-Mu dari kami. Roh Kudus yang telah Kau kirim atas murid-murid-Mu yang kudus dan para rasul yang dihormati pada jam ketiga, biarlah Dia memperbaharui batin kita. Ciptakanlah hati yang bersih dalam diriku, Ya Allah, dan taruhlah Roh yang baru dan setia dalam diriku, janganlah Kau usir aku dari hadirat-Mu dan janganlah Kau ambil Roh-Mu yang kudus dari padaku.",
              "Doksa patri ke eiyo-ke-agi-yo pnevmaty",
              "(Kemuliaan kepada Bapa dan Putra dan Roh Kudus)"
            ]
          },
          {
            label: "Litani Kedua",
            text: [
              "Ya Tuhan, Engkau yang mengirimkan Roh Kudus-Mu atas para murid yang kudus dan para rasul yang dihormati pada jam ketiga, janganlah Kau ambil Roh Kudus-Mu dari pada kami, ya Tuhan yang baik. Kami memohon kepada-Mu Tuhan Yesus Kristus, Sang Firman Allah perbaharuilah kami dengan roh yang benar dan yang menghidupkan, roh bertobat dan yang murni, roh yang kudus, yang benar dan penuh kuasa, ya Yang Maha Kuasa, sebab Engkau adalah terang bagi jiwa kami, Engkau yang memberi terang kepada setiap orang yang datang ke dunia ini, kasihanilah kami.",
              "Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen",
              "(Sekarang dan selama-lamanya. Amin)"
            ]
          },
          {
            label: "Litani Ketiga",
            text: [
              "O Theotokos, Bunda Allah, yang penuh kasih kurnia, engkau adalah pohon anggur yang benar yang membawa Rangkaian Kehidupan, kami memohon kepadamu bersama para Rasul untuk berdoa bagi keselamatan jiwa kami. Terpujilah Tuhan Allah kami. Terpujilah Tuhan dari hari ke hari. Dia mempersiapkan jalan bagi kami, sebab Ia adalah Allah keselamatan kami.",
              "Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen",
              "(Sekarang dan selama-lamanya. Amin)"
            ]
          },
          {
            label: "Litani Keempat",
            text: [
              "Ya Raja Surgawi, Penghibur, Roh Kebenaran, yang berada di setiap tempat dan memenuhi segalanya, sumber kebaikan dan Pemberi hidup, datanglah dengan anugerah dan tinggallah di dalam kami, sucikanlah kami dari segala kenajisan, ya Yang Mahabaik, dan selamatkanlah jiwa kami.",
              "Doksa patri ke eiyo-ke-agi-yo pnevmaty",
              "Kemuliaan kepada Bapa dan Putra dan Roh Kudus"
            ]
          },
          {
            label: "Litani Kelima",
            text: [
              "Sebagaimana Engkau bersama para rasul, ya Juruselamat, dan Engkau telah memberikan mereka damai, datanglah dengan anugerah dan bersamalah kami, berikanlah kami damai-Mu, selamatkan kami dan bebaskanlah jiwa kami.",
              "Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen",
              "(Sekarang dan selama-lamanya. Amin)"
            ]
          },
          {
            label: "Litani Keenam",
            text: [
              "Saat kami berdiri di dalam Bait Kudis-Mu, kami dianggap seperti mereka yang berada di surga. Ya Theotokos, engkau adalah pintu surga, bukalah bagi kami pintu kemurahan."
            ]
          },
          {
            label: "Kyrie Eleison",
            text: [
              "Ya Tuhan, dengarlah kami, kasihanilah kami, dan ampunilah dosa-dosa kami. Amin.",
              "Tuhan kasihanilah (Kyrie Eleison) 41 kali."
            ]
          }
        ]
      },
      {
        title: "V. DOA KUDUS",
        subTitle: "KUDUS, KUDUS, KUDUS Jam Ketiga",
        parts: [
          {
            label: "KUDUS KUDUS KUDUS",
            text: [
              "Kudus, kudus, kuduslah Tuhan pemimpin pasukan malaikat, Sabaoth. Surga dan Bumi penuh dengan hormat dan kemuliaan-Mu. Kasihanilah kami, Ya Allah Bapa yang Maha Kuasa, Pantokrator.",
              "Ya Tritunggal Maha Kudus kasihanilah kami.",
              "Ya Tuhan, Allah pemimpin pasukan malaikat, sertailah kami. Karena kami tidak mempunyai penolong di dalam kesukaran dan kemalangan, tetapi hanya Engkau saja.",
              "Ya Allah bebaskan, ampuni dan hapuskanlah dosa yang telah kami perbuat secara sengaja dan tidak sengaja, sadar dan tidak-sadar, yang tersembunyi dan yang terlihat.",
              "Ya Tuhan ampunilah kami demi nama-Mu yang Kudus yang dipanggil atas kami, menurut belas kasihan-Mu dan bukan menurut dosa-dosa kami."
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      },
      {
        title: "VI. Absolusi Jam Ketiga",
        subTitle: "Doa Pengampunan Jam Ketiga",
        parts: [
          {
            label: "Doa Absolusi",
            text: [
              "Ya Allah Yang Pemurah dan Tuhan Sang Penghibur, yang menghibur kami setiap waktu dengan penghiburan Roh Kudus-Mu, kami bersyukur karena Engkau membangunkan kami untuk berdoa pada jam yang kudus ini, dimana pada jam ini Engkau telah mencurahkan anugerah Roh Kudus-Mu dalam bentuk lidah api pada para murid-Mu yang diberkati dan dihormati.",
              "Kami mohon kepada-Mu, ya Kekasih manusia untuk menerima doa kami, mengampuni dosa kami dan memberikan anugerah Roh Kudus-Mu bagi kami, dan sucikanlah kami dari segala kenajisan pada tubuh dan roh kami.",
              "Ubahkanlah kehidupan rohani kami sehingga kami berjalan di dalam Roh dan tidak memenuhi keinginan daging. Dan buatlah kami layak untuk melayani Engkau dengan kemurnian dan kebenaran sepanjang hari-hari hidup kami. Karena Engkau layak menerima kemuliaan, kehormatan dan kuasa bersama Bapa-Mu yang Baik dan Roh kudus sekarang dan selama-lamanya, dari segala abad hingga segala abad. Amin."
            ]
          }
        ]
      },
      {
        title: "VII. Penutup Jam Ketiga",
        subTitle: "DOA PENUTUP",
        parts: [
          {
            label: "Doa Penutup",
            text: [
              "Kasihanilah kami, ya Allah, kasihanilah kami, Engkau yang setiap waktu dan saat selalu disembah dan dimuliakan di bumi dan di surga.",
              "Kristus, Tuhan kami yang baik, yang penuh kesabaran, yang melimpah dalam kemurahan, dan besar dalam belas kasihan; yang mencintai orang benar dan berbelas kasihan terhadap orang berdosa, terutama dirikulah yang paling berdosa. Engkau tidak menghendaki kematian orang berdosa, melainkan agar dia bertobat dan hidup, memanggil semua orang untuk diselamatkan, supaya mereka memperoleh janji akan hal-hal yang baik di masa yang akan datang.",
              "Tuhan, terimalah doa kami pada jam ini dan setiap waktu. Permudahlah hidup kami, dan tuntunlah kami untuk bertindak menurut perintah-Mu. Kuduskanlah jiwa kami. Bersihkanlah tubuh kami. Bimbinglah pikiran kami. Murnikanlah keinginan kami. Sembuhkanlah sakit kami. Ampunilah dosa-dosa kami. Lepaskanlah kami dari segala kesedihan dan penderitaan batin.",
              "Kelilingilah kami dengan malaikat-Mu yang kudus supaya kami dijaga dan dituntun oleh mereka, dan mencapai kesatuan iman dan pengetahuan mengenai kemuliaan-Mu yang tidak dapat dimengerti dan tanpa batas, karena Engkau mulia sampai selama-lamanya. Amin.",
              "(Lanjutkan dengan doa pribadi masing-masing dan diakhiri dengan Doa Bapa Kami)"
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sext",
    title: "Jam Keenam",
    titleEn: "Sext",
    timeText: "12:00 (Siang)",
    theme: "Penyaliban Tuhan Yesus Kristus",
    description: "Merenungkan jam penderitaan besar di mana Sang Juru Selamat dipaku di kayu salib demi menghapus surat utang dosa kita dan memberi kita keselamatan.",
    sections: [
      {
        title: "I. Pendahuluan (Pengantar Doa)",
        subTitle: "Doa Pembuka & Doa Syukur",
        parts: [
          { label: "Tanda Salib", text: corePrayers.tandaSalib.text },
          { label: "Bapa Kami", text: corePrayers.doaTuhan.text },
          { label: "Doa Ucapan Syukur", text: corePrayers.doaSyukur.text },
          { label: "Mazmur 51", text: corePrayers.mazmur51.text }
        ]
      },
      {
        title: "II. Mazmur-Mazmur Agpeya",
        subTitle: "Mazmur Pilihan Jam Keenam",
        parts: [
          {
            label: "Ucapan Umat",
            text: [
              "Doa Jam Keenam yang diberkati ini kupanjatkan kepada Kristus Rajaku dan Allahku, memohon kepada-Nya untuk mengampuni segala dosaku.",
              "Dari Mazmur Daud, bapa kita, nabi dan raja, semoga berkat-berkatnya menyertai kita semua. Amin."
            ]
          },
          {
            label: "Mazmur 54 - Doa Menghadapi Musuh",
            text: [
              "Ya Allah, selamatkanlah aku karena nama-Mu, berilah keadilan kepadaku karena keperkasaan-Mu!",
              "Ya Allah, dengarkanlah doaku, berilah telinga kepada ucapan mulutku!",
              "Sebab orang-orang yang angkuh bangkit menyerang aku, orang-orang yang sombong ingin mencabut nyawaku; mereka tidak mempedulikan Allah. Sela",
              "Sesungguhnya, Allah adalah penolongku; Tuhanlah yang menopang aku.",
              "Biarlah kejahatan itu berbalik kepada seteru-seteruku; binasakanlah mereka karena kesetiaan-Mu!",
              "Dengan rela hati aku akan mempersembahkan korban kepada-Mu, bersyukur sebab nama-Mu baik, ya Tuhan.",
              "Sebab Ia melepaskan aku dari segala kesesakan, dan mataku memandangi musuhku. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 57 - Doa Ditolong Allah",
            text: [
              "Kasihanilah aku, ya Allah, kasihanilah aku, sebab kepada-Mulah jiwaku berlindung; dalam naungan sayap-Mu aku akan berlindung, sampai berlalu penghancuran itu.",
              "Aku berseru kepada Allah, Yang Mahatinggi, kepada Allah yang menyelesaikannya bagiku.",
              "Kiranya Ia mengirim utusan dari sorga dan menyelamatkan aku, mencela orang-orang yang menginjak-injak aku. Sela",
              "Kiranya Allah mengirim kasih setia dan kebenaran-Nya.",
              "Aku terbaring di tengah-tengah singa yang suka menerkam anak-anak manusia, yang giginya laksana tombak dan panah, dan lidahnya laksana pedang tajam.",
              "Tinggikanlah diri-Mu mengatasi langit, ya Allah! Biarlah kemuliaan-Mu mengatasi seluruh bumi!",
              "Mereka memasang jaring terhadap langkah-langkahku, ditundukkannya jiwaku, mereka menggali lobang di depanku, tetapi mereka sendiri jatuh ke dalamnya. Sela",
              "Hatiku siap, ya Allah, hatiku siap; aku mau menyanyi, aku mau bermazmur.",
              "Bangunlah, hai jiwaku, bangunlah, hai gambus dan kecapi, aku mau membangunkan fajar!",
              "Aku mau bersyukur kepada-Mu di antara bangsa-bangsa, ya Tuhan, aku mau bermazmur bagi-Mu di antara suku-suku bangsa;",
              "sebab kasih setia-Mu besar sampai ke langit, dan kebenaran-Mu sampai ke awan-awan.",
              "Tinggikanlah diri-Mu mengatasi langit, ya Allah! Biarlah kemuliaan-Mu mengatasi seluruh bumi! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 61 - Doa Untuk Raja",
            text: [
              "Dengarkanlah kiranya seruanku, ya Allah, perhatikanlah doaku!",
              "Dari ujung bumi aku berseru kepada-Mu, karena hatiku lemah lesu; tuntunlah aku ke gunung batu yang terlalu tinggi bagiku.",
              "Sungguh Engkau telah menjadi tempat perlindunganku, menara yang kuat terhadap musuh.",
              "Biarlah aku menumpang di dalam kemah-Mu untuk selama-lamanya, biarlah aku berlindung dalam naungan sayap-Mu! Sela",
              "Sungguh, Engkau, ya Allah, telah mendengarkan nazarku, telah memenuhi permintaan orang-orang yang takut akan nama-Mu.",
              "Tambahilah umur raja, tahun-tahun hidupnya kiranya sampai turun-temurun;",
              "kiranya ia bersemayam di hadapan Allah selama-lamanya, titahkanlah kasih setia dan kebenaran menjaga dia.",
              "Maka aku hendak memazmurkan nama-Mu untuk selamanya, sedang aku membayar nazarku hari demi hari. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 63 - Kerinduan kepada Allah",
            text: [
              "Ya Allah, Engkaulah Allahku, aku mencari Engkau, jiwaku haus kepada-Mu, tubuhku rindu kepada-Mu, seperti tanah yang kering dan tandus, tiada berair.",
              "Demikianlah aku memandang kepada-Mu di tempat kudus, sambil melihat kekuatan-Mu dan kemuliaan-Mu.",
              "Sebab kasih setia-Mu lebih baik dari pada hidup; bibirku akan memegahkan Engkau.",
              "Demikianlah aku mau memuji Engkau seumur hidupku dan menaikkan tanganku demi nama-Mu.",
              "Seperti dengan lemak dan sumsum jiwaku dikenyangkan, dan dengan bibir yang bersorak-sorai mulutku memuji-muji.",
              "Apabila aku ingat kepada-Mu di tempat tidurku, merenungkan Engkau sepanjang kawal malam, –",
              "sungguh Engkau telah menjadi pertolonganku, dan dalam naungan sayap-Mu aku bersorak-sorai.",
              "Jiwaku melekat kepada-Mu, tangan kanan-Mu menopang aku.",
              "Tetapi orang-orang yang berikhtiar mencabut nyawaku, akan masuk ke bagian-bagian bumi yang paling bawah.",
              "Mereka akan diserahkan kepada kuasa pedang, mereka akan menjadi makanan anjing hutan.",
              "Tetapi raja akan bersukacita di dalam Allah; setiap orang, yang bersumpah demi Dia, akan bermegah, karena mulut orang-orang yang mengatakan dusta akan disumbat. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 67 - Nyanyian Syukur Berkat Allah",
            text: [
              "Kiranya Allah mengasihani kita dan memberkati kita, kiranya Ia menyinari kita dengan wajah-Nya, Sela",
              "supaya jalan-Mu dikenal di bumi, dan keselamatan-Mu di antara segala bangsa.",
              "Kiranya bangsa-bangsa bersyukur kepada-Mu, ya Allah; kiranya bangsa-bangsa semuanya bersyukur kepada-Mu.",
              "Kiranya suku-suku bangsa bersukacita dan bersorak-sorai, sebab Engkau memerintah bangsa-bangsa dengan adil, dan menuntun suku-suku bangsa di atas bumi. Sela",
              "Kiranya bangsa-bangsa bersyukur kepada-Mu, ya Allah, kiranya bangsa-bangsa semuanya bersyukur kepada-Mu.",
              "Tanah telah memberi hasilnya; Allah, Allah kita, memberkati kita.",
              "Allah memberkati kita; kiranya segala ujung bumi takut akan Dia! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 70 - Doa Minta Pertolongan",
            text: [
              "Ya Allah, bersegeralah melepaskan aku, menolong aku, ya Tuhan!",
              "Biarlah mendapat malu dan tersipu-sipu mereka yang ingin mencabut nyawaku; biarlah mundur dan kena noda mereka yang mengingini kecelakaanku;",
              "biarlah berbalik karena malu mereka yang mengatakan: ”Syukur, syukur!”",
              "Biarlah bergirang dan bersukacita karena Engkau semua orang yang mencari Engkau;",
              "biarlah mereka yang mencintai keselamatan dari pada-Mu selalu berkata: ”Allah itu besar!”",
              "Tetapi aku ini sengsara dan miskin – ya Allah, segeralah datang! Engkaulah yang menolong aku dan meluputkan aku; ya Tuhan, janganlah lambat datang! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 84 - Rindu kepada kediaman Allah",
            text: [
              "Betapa disenangi tempat kediaman-Mu, ya Tuhan semesta alam!",
              "Jiwaku hancur karena merindukan pelataran-pelataran Tuhan; hatiku dan dagingku bersorak-sorai kepada Allah yang hidup.",
              "Bahkan burung pipit telah mendapat sebuah rumah, dan burung layang-layang sebuah sarang, tempat menaruh anak-anaknya, pada mezbah-mezbah-Mu, ya Tuhan semesta alam, ya Rajaku dan Allahku!",
              "Berbahagialah orang-orang yang diam di rumah-Mu, yang terus-menerus memuji-muji Engkau. Sela",
              "Berbahagialah manusia yang kekuatannya di dalam Engkau, yang berhasrat mengadakan ziarah!",
              "Apabila melintasi lembah Baka, mereka membuatnya menjadi tempat yang bermata air; bahkan hujan pada awal musim menyelubunginya dengan berkat.",
              "Mereka berjalan makin lama makin kuat, hendak menghadap Allah di Sion.",
              "Ya Tuhan, Allah semesta alam, dengarkanlah doaku, pasanglah telinga, ya Allah Yakub. Sela",
              "Lihatlah perisai kami, ya Allah, pandanglah wajah orang yang Kauurapi!",
              "Sebab lebih baik satu hari di pelataran-Mu dari pada seribu hari di tempat lain; lebih baik berdiri di ambang pintu rumah Allahku dari pada diam di kemah-kemah orang fasik.",
              "Sebab Tuhan Allah adalah matahari dan perisai; kasih dan kemuliaan Ia berikan; Ia tidak menahan kebaikan dari orang yang hidup tidak bercela.",
              "Ya Tuhan semesta alam, berbahagialah manusia yang percaya kepada-Mu! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 85 - Doa mohon Israel dipulihkan",
            text: [
              "Engkau telah berkenan kepada tanah-Mu, ya Tuhan, telah memulihkan keadaan Yakub.",
              "Engkau telah mengampuni kesalahan umat-Mu, telah menutupi segala dosa mereka. Sela",
              "Engkau telah menyurutkan segala gemas-Mu, telah meredakan murka-Mu yang menyala-nyala.",
              "Pulihkanlah kami, ya Allah penyelamat kami, dan tiadakanlah sakit hati-Mu kepada kami.",
              "Untuk selamanyakah Engkau murka atas kami dan melanjutkan murka-Mu turun-temurun?",
              "Apakah Engkau tidak mau menghidupkan kami kembali, sehingga umat-Mu bersukacita karena Engkau?",
              "Perlihatkanlah kepada kami kasih setia-Mu, ya Tuhan, dan berikanlah kepada kami keselamatan dari pada-Mu!",
              "Aku mau mendengar apa yang hendak difirmankan Allah, Tuhan. Bukankah Ia hendak berbicara tentang damai kepada umat-Nya dan kepada orang-orang yang dikasihi-Nya, supaya jangan mereka kembali kepada kebodohan?",
              "Sesungguhnya keselamatan dari pada-Nya dekat pada orang-orang yang takut akan Dia, sehingga kemuliaan diam di negeri kita.",
              "Kasih dan kesetiaan akan bertemu, keadilan dan damai sejahtera akan bercium-ciuman.",
              "Kesetiaan akan tumbuh dari bumi, dan keadilan akan menjenguk dari langit.",
              "Bahkan Tuhan akan memberikan kebaikan, dan negeri kita akan memberi hasilnya.",
              "Keadilan akan berjalan di hadapan-Nya, dan akan membuat jejak kaki-Nya menjadi jalan. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 86 - Doa minta pertolongan",
            text: [
              "Sendengkanlah telinga-Mu, ya Tuhan, jawablah aku, sebab sengsara dan miskin aku.",
              "Peliharalah nyawaku, sebab aku orang yang Kaukasihi, selamatkanlah hamba-Mu yang percaya kepada-Mu.",
              "Engkau adalah Allahku, kasihanilah aku, ya Tuhan, sebab kepada-Mulah aku berseru sepanjang hari.",
              "Buatlah jiwa hamba-Mu bersukacita, sebab kepada-Mulah, ya Tuhan, kuangkat jiwaku.",
              "Sebab Engkau, ya Tuhan, baik dan suka mengampuni dan berlimpah kasih setia bagi semua orang yang berseru kepada-Mu.",
              "Pasanglah telinga kepada doaku, ya Tuhan, dan perhatikanlah suara permohonanku.",
              "Pada hari kesesakanku aku berseru kepada-Mu, sebab Engkau menjawab aku.",
              "Tidak ada seperti Engkau di antara para allah, ya Tuhan, dan tidak ada seperti apa yang Kaubuat.",
              "Segala bangsa yang Kaujadikan akan datang sujud menyembah di hadapan-Mu, ya Tuhan, dan akan memuliakan nama-Mu.",
              "Sebab Engkau besar dan melakukan keajaiban-keajaiban; Engkau sendiri saja Allah.",
              "Tunjukkanlah kepadaku jalan-Mu, ya Tuhan, supaya aku hidup menurut kebenaran-Mu; bulatkanlah hatiku untuk takut akan nama-Mu.",
              "Aku hendak bersyukur kepada-Mu, ya Tuhan, Allahku, dengan segenap hatiku, dan memuliakan nama-Mu untuk selama-lamanya;",
              "sebab kasih setia-Mu besar atas aku, dan Engkau telah melepaskan nyawaku dari dunia orang mati yang paling bawah.",
              "Ya Allah, orang-orang yang angkuh telah bangkit menyerang aku, dan gerombolan orang-orang yang sombong ingin mencabut nyawaku, dan tidak mempedulikan Engkau.",
              "Tetapi Engkau, ya Tuhan, Allah penyayang dan pengasih, panjang sabar dan berlimpah kasih dan setia.",
              "Berpalinglah kepadaku dan kasihanilah aku, berilah kekuatan-Mu kepada hamba-Mu, dan selamatkanlah anak laki-laki hamba-Mu perempuan!",
              "Lakukanlah kepadaku suatu tanda kebaikan, supaya orang-orang yang membenci aku melihat dengan malu, bahwa Engkau, ya Tuhan, telah menolong dan menghiburkan aku. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 87 - Sion kota Allah",
            text: [
              "Di gunung-gunung yang kudus ada kota yang dibangunkan-Nya:",
              "Tuhan lebih mencintai pintu-pintu gerbang Sion dari pada segala tempat kediaman Yakub.",
              "Hal-hal yang mulia dikatakan tentang engkau, ya kota Allah. Sela",
              "Aku menyebut Rahab dan Babel di antara orang-orang yang mengenal Aku, bahkan Filistea, Tirus dan Etiopia: ”Ini dilahirkan di sana.”",
              "Tetapi tentang Sion dikatakan: ”Seorang demi seorang dilahirkan di dalamnya,” dan Dia, Yang Mahatinggi, menegakkannya.",
              "Tuhan menghitung pada waktu mencatat bangsa-bangsa: ”Ini dilahirkan di sana.” Sela",
              "Dan orang menyanyi-nyanyi sambil menari beramai-ramai: ”Segala mata airku ada di dalammu.” ALLELUIA."
            ]
          },
          {
            label: "Mazmur 91 - Dalam lindungan Allah",
            text: [
              "Orang yang duduk dalam lindungan Yang Mahatinggi dan bermalam dalam naungan Yang Mahakuasa",
              "akan berkata kepada Tuhan: ”Tempat perlindunganku dan kubu pertahananku, Allahku, yang kupercayai.”",
              "Sungguh, Dialah yang akan melepaskan engkau dari jerat penangkap burung, dari penyakit sampar yang busuk.",
              "Dengan kepak-Nya Ia akan menudungi engkau, di bawah sayap-Nya engkau akan berlindung, kesetiaan-Nya ialah perisai dan pagar tembok.",
              "Engkau tak usah takut terhadap kedahsyatan malam, terhadap panah yang terbang di waktu siang,",
              "terhadap penyakit sampar yang berjalan di dalam gelap, terhadap penyakit menular yang mengamuk di waktu petang.",
              "Walau seribu orang rebah di sisimu, dan sepuluh ribu di sebelah kananmu, tetapi itu tidak akan menimpamu.",
              "Engkau hanya menontonnya dengan matamu sendiri dan melihat pembalasan terhadap orang-orang fasik.",
              "Sebab Tuhan ialah tempat perlindunganmu, Yang Mahatinggi telah kaubuat tempat perteduhanmu,",
              "malapetaka tidak akan menimpa kamu, dan tulah tidak akan mendekat kepada kemahmu;",
              "sebab malaikat-malaikat-Nya akan diperintahkan-Nya kepadamu untuk menjaga engkau di segala jalanmu.",
              "Mereka akan menatang engkau di atas tangannya, supaya kakimu jangan terantuk kepada batu.",
              "Singa dan ular tedung akan kaulangkahi, engkau akan menginjak anak singa dan ular naga.",
              "”Sungguh, hatinya melekat kepada-Ku, maka Aku akan meluputkannya, Aku akan membentenginya, sebab ia mengenal nama-Ku.",
              "Bila ia berseru kepada-Ku, Aku akan menjawab, Aku akan menyertai dia dalam kesesakan, Aku akan meluputkannya dan memuliakannya.",
              "Dengan panjang umur akan Kukenyangkan dia, dan akan Kuperlihatkan kepadanya keselamatan dari pada-Ku.” ALLELUIA."
            ]
          },
          {
            label: "Mazmur 93 - Tuhan Raja Yang Kekal",
            text: [
              "Tuhan adalah Raja, Ia berpakaian kemegahan, Tuhan berpakaian, berikat pinggang kekuatan.",
              "Sungguh, telah tegak dunia, tidak bergoyang;",
              "takhta-Mu tegak sejak dahulu kala, dari kekal Engkau ada.",
              "Sungai-sungai telah mengangkat, ya Tuhan, sungai-sungai telah mengangkat suaranya, sungai-sungai mengangkat bunyi hempasannya.",
              "Dari pada suara air yang besar, dari pada pecahan ombak laut yang hebat, lebih hebat Tuhan di tempat tinggi.",
              "Peraturan-Mu sangat teguh; bait-Mu layak kudus, ya Tuhan, untuk sepanjang masa. ALLELUIA."
            ]
          }
        ]
      },
      {
        title: "III. Injil Kudus",
        subTitle: "Matius 5:1-12 (Ucapan Bahagia)",
        parts: [
          {
            label: "Injil Matius",
            text: [
              "Kudus, kudus, kudus. Pembacaan Injil Kudus menurut guru kita Santo Matius. Kiranya berkat-berkatnya beserta kita semua. Amin.",
              "Ketika Yesus melihat orang banyak itu, naiklah Ia ke atas bukit dan setelah Ia duduk, datanglah murid-murid-Nya kepada-Nya.",
              "Maka Yesus pun mulai berbicara dan mengajar mereka, kata-Nya:",
              "\"Berbahagialah orang yang miskin di hadapan Allah, karena merekalah yang empunya Kerajaan Sorga.\"",
              "\"Berbahagialah orang yang berdukacita, karena mereka akan dihibur.\"",
              "\"Berbahagialah orang yang lemah lembut, karena mereka akan memiliki bumi.\"",
              "\"Berbahagialah orang yang lapar dan haus akan kebenaran, karena mereka akan dipuaskan.\"",
              "\"Berbahagialah orang yang murah hatinya, karena mereka akan beroleh kemurahan.\"",
              "\"Berbahagialah orang yang suci hatinya, karena mereka akan melihat Allah.\"",
              "\"Berbahagialah orang yang membawa damai, karena mereka akan disebut anak-anak Allah.\"",
              "\"Berbahagialah orang yang dianiaya oleh sebab kebenaran, karena merekalah yang empunya Kerajaan Sorga.\"",
              "\"Berbahagialah kamu, jika karena Aku kamu dicela dan dianiaya dan kepadamu difitnahkan segala yang jahat.\"",
              "\"Bersukacita dan bergembiralah, karena upahmu besar di sorga, sebab demikian juga telah dianiaya nabi-nabi yang sebelum kamu.\"",
              "\"Kamu adalah garam dunia. Jika garam itu menjadi tawar, dengan apakah ia diasinkan? Tidak ada lagi gunanya selain dibuang dan diinjak orang.\"",
              "\"Kamu adalah terang dunia. Kota yang terletak di atas gunung tidak mungkin tersembunyi.\"",
              "\"Lagipula orang tidak menyalakan pelita lalu meletakkannya di bawah gantang, melainkan di atas kaki dian sehingga menerangi semua orang di dalam rumah itu.\"",
              "\"Demikianlah hendaknya terangmu bercahaya di depan orang, supaya mereka melihat perbuatanmu yang baik dan memuliakan Bapamu yang di sorga.\""
            ]
          },
          {
            label: "Kemuliaan kepada Allah selamanya. Amin.",
            text: [
              "Ten-oo aesh. tem-mok o pie-ekhr-iestos nem pe-kyot en agha-thos nem-pi epnevma etho-wab je a-ki ak-soati em-mon nai na-n.",
              "(Kami menyembah-Mu ya Kristus, bersama Bapa-Mu Yang Baik dan Roh Kudus, karena Engkau datang dan menyelamatkan kami, kasihanilah kami.)"
            ]
          }
        ]
      },
      {
        title: "IV. Litani Jam Keenam",
        subTitle: "Doa Sembahyang di Bawah Salib",
        parts: [
          {
            label: "Litani Pertama",
            text: [
              "Ya Tuhan, pada hari keenam, pada jam keenam Engkau dipaku di kayu salib untuk dosa yang diperbuat Adam di taman Firdaus, robeklah tulisan dosa-dosa kami, ya Yesus Kristus Allah kami, dan selamatkanlah kami. Aku berseru kepada Allah dan Ia mendengarkanku. Allah dengarlah doaku, dan janganlah menolak permohonanku. Perhatikanlah aku dan dengarkanlah seruanku pada waktu malam, pagi dan siang hari. Ketika aku berdoa dan Tuhan mendengarkan dan menyelamatkan jiwaku dalam damai.",
              "Doksa patri ke eiyo-ke-agi-yo pnevmaty",
              "(Kemuliaan kepada Bapa dan Putra dan Roh Kudus)"
            ]
          },
          {
            label: "Litani Kedua",
            text: [
              "Ya Yesus Kristus, Allah kami, yang dipaku di kayu salib pada jam keenam dan telah mematikan dosa dengan kayu salib, dan melalui kematian-Mu Engkau membangkitkan orang mati, yaitu manusia yang Engkau ciptakan dengan tangan-Mu sendiri, yang mati karena dosa. Semua penderitaan kami diakhiri oleh kasih-Mu yang menyembuhkan dan yang memberi hidup, dan melalui paku yang ditancapkan kepada-Mu. Selamatkan pikiran kami dari kecerobohan, perbuatan dan nafsu duniawi untuk tertuju kepada hukum Surgawi menurut belas kasihan-Mu.",
              "Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen.",
              "(Sekarang dan selama-lamanya. Amin.)"
            ]
          },
          {
            label: "Litani Ketiga",
            text: [
              "Karena banyaknya dosa kami, kami tidak memiliki bantuan ataupun alasan, maupun pembenaran, maka kami memohon kepadamu berdoalah kepada Dia yang engkau lahirkan, Ya Theotokos, Sang Perawan, karena permohonanmu didengar oleh Juruselamat kami. Ya Bunda yang suci, janganlah abaikan orang berdosa dari syafaatmu kepada Dia yang engkau kandung, sebab Dia murah hati dan sanggup menyelamatkan kami, sebab Dia telah menderita bagi kami untuk membebaskan kami. Biarlah belas kasihmu sampai kepada kami sebab kami sangatlah hina. Tolonglah kami, Ya Allah Juruselamat kami, bagi nama-Mulah segala kemuliaan. Ya Tuhan, bebaskanlah dan ampunilah dosa-dosa kami demi Nama-Mu yang Kudus.",
              "Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen.",
              "(Sekarang dan selama-lamanya. Amin.)"
            ]
          },
          {
            label: "Litani Keempat",
            text: [
              "Ya Kristus, Allah kami, Engkau memberikan keselamatan bagi seluruh dunia pada saat Engkau merentangkan tangan-Mu yang kudus di kayu salib. Sebab itu semua bangsa memberikan pujian kepada-Mu yang mengatakan, \"Kemuliaan bagi-Mu Tuhan.\"",
              "Doksa patri ke eiyo-ke-agi-yo pnevmaty",
              "(Kemuliaan kepada Bapa dan Putra dan Roh Kudus)"
            ]
          },
          {
            label: "Litani Kelima",
            text: [
              "Ya Kristus Allah kami, Yang Maha Baik, kami menyembah pribadi-Mu yang tak dapat hancur, memohon pengampunan atas dosa kami. Karena Engkau rela disalib untuk membebaskan ciptaan-Mu dari perbudakan musuh. Kami berseru dan berterima kasih pada-Mu, karena Engkau memenuhi kami dengan sukacita, Ya Juruselamat, pada waktu Engkau datang untuk menolong dunia.",
              "Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen.",
              "(Sekarang dan selama-lamanya. Amin.)"
            ]
          },
          {
            label: "Litani Keenam",
            text: [
              "Ya Theotokos, Sang Perawan, engkaulah dia yang penuh rahmat, kami memujimu, sebab melalui Salib Anakmu, Alam maut telah jatuh dan kematian sudah dihapuskan. Sebelumnya kami mati, tetapi kami dibangkitkan, dan dilayakkan untuk mewarisi kehidupan kekal dan mendapatkan terang dari Firdaus yang pertama. Oleh sebab itu, kami memuliakan-Mu dengan penuh ucapan syukur, Kristus Allah kami yang kekal."
            ]
          },
          {
            label: "Kyrie Eleison",
            text: [
              "Ya Tuhan, dengarlah kami, kasihanilah kami, dan ampunilah dosa-dosa kami. Amin.",
              "Tuhan kasihanilah (Kyrie Eleison) 41 kali."
            ]
          }
        ]
      },
      {
        title: "V. DOA KUDUS",
        subTitle: "KUDUS, KUDUS, KUDUS Jam Keenam",
        parts: [
          {
            label: "KUDUS KUDUS KUDUS",
            text: [
              "Kudus, kudus, kuduslah Tuhan pemimpin pasukan malaikat, Sabaoth. Surga dan Bumi penuh dengan hormat dan kemuliaan-Mu. Allah Bapa Yang Maha Kuasa kasihanilah kami.",
              "Ya Tritunggal Maha Kudus kasihanilah kami.",
              "Ya Tuhan, Allah pemimpin pasukan malaikat, sertailah kami, karena kami hanya mempunyai Engkau saja sebagai penopang didalam kesukaran dan kemalangan.",
              "Ya ALLAH bebaskan, ampuni dan hapuskanlah dosa-dosa yang telah kami perbuat secara sengaja dan tidak sengaja, sadar dan tidak-sadar, yang tersembunyi dan yang terlihat.",
              "Ya Tuhan ampunilah kami demi nama-Mu yang Kudus yang memanggil kami, menurut belas kasihan-Mu dan bukan menurut dosa-dosa kami."
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      },
      {
        title: "VI. Absolusi Jam Keenam",
        subTitle: "Doa Pengampunan Jam Keenam",
        parts: [
          {
            label: "Doa Absolusi",
            text: [
              "Kami bersyukur kepada-Mu Raja kami, Sang Pantokrator, Bapa dari Tuhan Allah dan Juruselamat kami Yesus Kristus, dan kami memuliakan Engkau karena Engkau telah menjadikan masa penderitaan Anak-Mu Yang Tunggal menjadi waktu doa dan penghiburan.",
              "Terimalah permohonan kami dan hilangkanlah meterai dosa kami yang tertulis terhadap kami, sebagaimana Engkau telah merobeknya di jam yang suci ini lewat penyaliban Anak-Mu Yang Tunggal, Juruselamat jiwa kami, Tuhan kami Yesus Kristus, melalui Dia Engkau telah menghancurkan kuasa musuh.",
              "Tuhan berilah kami waktu yang mulia, hidup yang tidak bercela dan damai, sehingga kami menyenangkan nama-Mu yang Kudus dan yang disembah.",
              "Izinkan kami untuk berdiri di hadapan takhta pengadilan Anak-Mu Yang Tunggal, Tuhan kami Yesus Kristus, tanpa penghukuman, supaya kami dapat memuji Engkau bersama semua orang suci-Mu, Bapa yang tanpa awal, kami memuliakan Engkau bersama Anak-Mu yang sehakekat dengan-Mu, dan bersama Roh Kudus, Pemberi Hidup sekarang dan selamanya dan dari segala abad hingga segala abad. Amin."
            ]
          }
        ]
      },
      {
        title: "VII. Penutup Jam Keenam",
        subTitle: "DOA PENUTUP",
        parts: [
          {
            label: "Doa Penutup",
            text: [
              "Kasihanilah kami, ya Allah, kasihanilah kami, Engkau yang setiap waktu dan saat selalu disembah dan dimuliakan di bumi dan di surga.",
              "Kristus, Tuhan kami yang baik, yang penuh kesabaran, yang melimpah dalam kemurahan, dan besar dalam belas kasihan; yang mencintai orang benar dan berbelas kasihan terhadap orang berdosa, terutama dirikulah yang paling berdosa. Engkau tidak menghendaki kematian orang berdosa, melainkan agar dia bertobat dan hidup, memanggil semua orang untuk diselamatkan, supaya mereka memperoleh janji akan hal-hal yang baik di masa yang akan datang.",
              "Tuhan, terimalah doa kami pada jam ini dan setiap waktu. Permudahlah hidup kami, dan tuntunlah kami untuk bertindak menurut perintah-Mu. Kuduskanlah jiwa kami. Bersihkanlah tubuh kami. Bimbinglah pikiran kami. Murnikanlah keinginan kami. Sembuhkanlah sakit kami. Ampunilah dosa-dosa kami. Lepaskanlah kami dari segala kesedihan dan penderitaan batin.",
              "Kelilingilah kami dengan malaikat-Mu yang kudus supaya kami dijaga dan dituntun oleh mereka, dan mencapai kesatuan iman dan pengetahuan mengenai kemuliaan-Mu yang tidak dapat dimengerti dan tanpa batas, karena Engkau mulia sampai selama-lamanya. Amin.",
              "(Lanjutkan dengan doa pribadi masing-masing dan diakhiri dengan Doa Bapa Kami)"
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "none",
    title: "Jam Kesembilan",
    titleEn: "None",
    timeText: "15:00 (Sore)",
    theme: "Kematian Jasmani Tuhan Yesus di Salib",
    description: "Mengingat saat Kristus menyerahkan nyawa-Nya ke dalam tangan Bapa-Nya di atas salib, meruntuhkan kuasa maut, dan membuka kembali pintu firdaus bagi penyamun yang bertobat.",
    sections: [
      {
        title: "I. Pendahuluan (Pengantar Doa)",
        subTitle: "Doa Pembuka & Doa Syukur",
        parts: [
          { label: "Tanda Salib", text: corePrayers.tandaSalib.text },
          { label: "Bapa Kami", text: corePrayers.doaTuhan.text },
          { label: "Doa Ucapan Syukur", text: corePrayers.doaSyukur.text },
          { label: "Mazmur 51", text: corePrayers.mazmur51.text }
        ]
      },
      {
        title: "II. Mazmur-Mazmur Agpeya",
        subTitle: "Mazmur Pilihan Jam Kesembilan",
        parts: [
          {
            label: "Ucapan Umat",
            text: [
              "Doa Jam Kesembilan pada hari yang diberkati ini kupanjatkan kepada Kristus Rajaku dan Allahku, memohon kepada-Nya untuk mengampuni segala dosaku.",
              "Dari Mazmur Daud, bapa kita, nabi dan raja, semoga berkat-berkatnya menyertai kita semua. Amin."
            ]
          },
          {
            label: "Mazmur 96 - Allah, Tuhan dan Hakim seluruh dunia",
            text: [
              "Nyanyikanlah nyanyian baru bagi Tuhan, menyanyilah bagi Tuhan, hai segenap bumi!",
              "Menyanyilah bagi Tuhan, pujilah nama-Nya, kabarkanlah keselamatan yang dari pada-Nya dari hari ke hari.",
              "Ceritakanlah kemuliaan-Nya di antara bangsa-bangsa dan perbuatan-perbuatan-Nya yang ajaib di antara segala suku bangsa.",
              "Sebab Tuhan maha besar dan terpuji sangat, Ia lebih dahsyat dari pada segala allah.",
              "Sebab segala allah bangsa-bangsa adalah hampa, tetapi Tuhanlah yang menjadikan langit.",
              "Keagungan dan semarak ada di hadapan-Nya, kekuatan dan kehormatan ada di tempat kudus-Nya.",
              "Kepada Tuhan, hai suku-suku bangsa, kepada Tuhan sajalah kemuliaan dan kekuatan!",
              "Berilah kepada Tuhan kemuliaan nama-Nya, bawalah persembahan dan masuklah ke pelataran-Nya!",
              "Sujudlah menyembah kepada Tuhan dengan berhiaskan kekudusan, gemetarlah di hadapan-Nya, hai segenap bumi!",
              "Katakanlah di antara bangsa-bangsa: ”Tuhan itu Raja! Sungguh tegak dunia, tidak goyang. Ia akan mengadili bangsa-bangsa dalam kebenaran.”",
              "Biarlah langit bersukacita dan bumi bersorak-sorak, biarlah gemuruh laut serta isinya,",
              "biarlah beria-ria padang dan segala yang di atasnya, maka segala pohon di hutan bersorak-sorai",
              "di hadapan Tuhan, sebab Ia datang, sebab Ia datang untuk menghakimi bumi. Ia akan menghakimi dunia dengan keadilan, dan bangsa-bangsa dengan kesetiaan-Nya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 97 - Tuhan adalah Raja",
            text: [
              "Tuhan adalah Raja! Biarlah bumi bersorak-sorak, biarlah banyak pulau bersukacita!",
              "Awan dan kekelaman ada sekeliling Dia, keadilan dan hukum adalah tumpuan takhta-Nya.",
              "Api menjalar di hadapan-Nya, dan menghanguskan para lawan-Nya sekeliling.",
              "Kilat-kilat-Nya menerangi dunia, bumi melihatnya dan gemetar.",
              "Gunung-gunung luluh seperti lilin di hadapan Tuhan, di hadapan Tuhan seluruh bumi.",
              "Langit memberitakan keadilan-Nya, dan segala bangsa melihat kemuliaan-Nya.",
              "Semua orang yang beribadah kepada patung akan mendapat malu, orang yang memegahkan diri karena berhala-berhala; segala allah sujud menyembah kepada-Nya.",
              "Sion mendengarnya dan bersukacita, puteri-puteri Yehuda bersorak-sorak, oleh karena penghukuman-Mu, ya Tuhan.",
              "Sebab Engkaulah, ya Tuhan, Yang Mahatinggi di atas seluruh bumi, Engkau sangat dimuliakan di atas segala allah.",
              "Hai orang-orang yang mengasihi Tuhan, bencilah kejahatan! Dia, yang memelihara nyawa orang-orang yang dikasihi-Nya, akan melepaskan mereka dari tangan orang-orang fasik.",
              "Terang sudah terbit bagi orang benar, dan sukacita bagi orang-orang yang tulus hati.",
              "Bersukacitalah karena Tuhan, hai orang-orang benar, dan nyanyikanlah syukur bagi nama-Nya yang kudus. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 98 - Saat penyelamatan sudah dekat",
            text: [
              "Nyanyikanlah nyanyian baru bagi Tuhan, sebab Ia telah melakukan perbuatan-perbuatan yang ajaib; keselamatan telah dikerjakan kepada-Nya oleh tangan kanan-Nya, oleh lengan-Nya yang kudus.",
              "Tuhan telah memperkenalkan keselamatan yang dari pada-Nya, telah menyatakan keadilan-Nya di depan mata bangsa-bangsa.",
              "Ia mengingat kasih setia dan kesetiaan-Nya terhadap kaum Israel, segala ujung bumi telah melihat keselamatan yang dari pada Allah kita.",
              "Bersorak-soraklah bagi Tuhan, hai seluruh bumi, bergembiralah, bersorak-sorailah dan bermazmurlah!",
              "Bermazmurlah bagi Tuhan dengan kecapi, dengan kecapi dan lagu yang nyaring,",
              "dengan nafiri dan sangkakala yang nyaring bersorak-soraklah di hadapan Raja, yakni Tuhan!",
              "Biarlah gemuruh laut serta isinya, dunia serta yang diam di dalamnya!",
              "Biarlah sungai-sungai bertepuk tangan, dan gunung-gunung bersorak-sorai bersama-sama",
              "di hadapan Tuhan, sebab Ia datang untuk menghakimi bumi. Ia akan menghakimi dunia dengan keadilan, dan bangsa-bangsa dengan kebenaran. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 99 - Tuhan, Raja yang kudus",
            text: [
              "Tuhan itu Raja, maka bangsa-bangsa gemetar. Ia duduk di atas kerub-kerub, maka bumi goyang.",
              "Tuhan itu maha besar di Sion, dan Ia tinggi mengatasi segala bangsa.",
              "Biarlah mereka menyanyikan syukur bagi nama-Mu yang besar dan dahsyat; Kuduslah Ia!",
              "Raja yang kuat, yang mencintai hukum, Engkaulah yang menegakkan kebenaran; hukum dan keadilan di antara keturunan Yakub, Engkaulah yang melakukannya.",
              "Tinggikanlah Tuhan, Allah kita, dan sujudlah menyembah kepada tumpuan kaki-Nya! Kuduslah Ia!",
              "Musa dan Harun di antara imam-imam-Nya, dan Samuel di antara orang-orang yang menyerukan nama-Nya. Mereka berseru kepada Tuhan dan Ia menjawab mereka.",
              "Dalam tiang awan Ia berbicara kepada mereka; mereka telah berpegang pada peringatan-peringatan-Nya dan ketetapan yang diberikan-Nya kepada mereka.",
              "Tuhan, Allah kami, Engkau telah menjawab mereka, Engkau Allah yang mengampuni bagi mereka, tetapi yang membalas perbuatan-perbuatan mereka.",
              "Tinggikanlah Tuhan, Allah kita, dan sujudlah menyembah di hadapan gunung-Nya yang kudus! Sebab kuduslah Tuhan, Allah kita! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 100 - Pujilah Allah dalam bait-Nya",
            text: [
              "Bersorak-soraklah bagi Tuhan, hai seluruh bumi!",
              "Beribadahlah kepada Tuhan dengan sukacita, datanglah ke hadapan-Nya dengan sorak-sorai!",
              "Ketahuilah, bahwa Tuhanlah Allah; Dialah yang menjadikan kita and punya Dialah kita, umat-Nya dan kawanan domba gembalaan-Nya.",
              "Masuklah melalui pintu gerbang-Nya dengan nyanyian syukur, ke dalam pelataran-Nya dengan puji-pujian, bersyukurlah kepada-Nya dan pujilah nama-Nya!",
              "Sebab Tuhan itu baik, kasih setia-Nya untuk selama-lamanya, dan kesetiaan-Nya tetap turun-temurun. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 101 - Seorang raja bernazar",
            text: [
              "Aku hendak menyanyikan kasih setia dan hukum, aku hendak bermazmur bagi-Mu, ya Tuhan.",
              "Aku hendak memperhatikan hidup yang tidak bercela: Bilakah Engkau datang kepadaku? Aku hendak hidup dalam ketulusan hatiku di dalam rumahku.",
              "Tiada kutaruh di depan mataku perkara dursila; perbuatan murtad aku benci, itu takkan melekat padaku.",
              "Hati yang bengkok akan menjauh dari padaku, kejahatan aku tidak mau tahu.",
              "Orang yang sembunyi-sembunyi mengumpat temannya, dia akan kubinasakan. Orang yang sombong dan tinggi hati, aku tidak suka.",
              "Mataku tertuju kepada orang-orang yang setiawan di negeri, supaya mereka diam bersama-sama dengan aku. Orang yang hidup dengan cara yang tak bercela, akan melayani aku.",
              "Orang yang melakukan tipu daya tidak akan diam di dalam rumahku, orang yang berbicara dusta tidak akan tegak di depan mataku.",
              "Setiap pagi akan kubinasakan semua orang fasik di negeri; akan kulenyapkan dari kota Tuhan, semua orang yang melakukan kejahatan. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 110 - Penobatan raja imam",
            text: [
              "Demikianlah firman Tuhan kepada tuanku: ”Duduklah di sebelah kanan-Ku, sampai Kubuat musuh-musuhmu menjadi tumpuan kakimu.”",
              "Tongkat kekuatanmu akan diulurkan Tuhan dari Sion: memerintahlah di antara musuhmu!",
              "Pada hari tentaramu bangsamu merelakan diri untuk maju dengan berhiaskan kekudusan; dari kandungan fajar tampil bagimu keremajaanmu seperti embun.",
              "Tuhan telah bersumpah, dan Ia tidak akan menyesal: ”Engkau adalah imam untuk selama-lamanya, menurut Melkisedek.”",
              "Tuhan ada di sebelah kananmu; Ia meremukkan raja-raja pada hari murka-Nya,",
              "Ia menghukum bangsa-bangsa, sehingga mayat-mayat bergelimpangan; Ia meremukkan orang-orang yang menjadi kepala di negeri luas.",
              "Dari sungai di tepi jalan ia minum, oleh sebab itu ia mengangkat kepala. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 111 - Kebajikan Allah",
            text: [
              "Aku mau bersyukur kepada Tuhan dengan segenap hati, dalam lingkungan orang-orang benar dan dalam jemaah.",
              "Besar perbuatan-perbuatan Tuhan, layak diselidiki oleh semua orang yang menyukainya.",
              "Agung dan bersemarak pekerjaan-Nya, dan keadilan-Nya tetap untuk selamanya.",
              "Perbuatan-perbuatan-Nya yang ajaib dijadikan-Nya peringatan; Tuhan itu pengasih dan penyayang.",
              "Diberikan-Nya rezeki kepada orang-orang yang takut akan Dia. Ia ingat untuk selama-lamanya akan perjanjian-Nya.",
              "Kekuatan perbuatan-Nya diberitakan-Nya kepada umat-Nya, dengan memberikan kepada mereka milik pusaka bangsa-bangsa.",
              "Perbuatan tangan-Nya ialah kebenaran dan keadilan, segala titah-Nya teguh,",
              "kokoh untuk seterusnya dan selamanya, dilakukan dalam kebenaran dan kejujuran.",
              "Dikirim-Nya kebebasan kepada umat-Nya, diperintahkan-Nya supaya perjanjian-Nya itu untuk selama-lamanya; nama-Nya kudus dan dahsyat.",
              "Permulaan hikmat adalah takut akan Tuhan, semua orang yang melakukannya berakal budi yang baik. Puji-pujian kepada-Nya tetap untuk selamanya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 112 - Bahagia orang benar",
            text: [
              "Berbahagialah orang yang takut akan Tuhan, yang sangat suka kepada segala perintah-Nya.",
              "Anak cucunya akan perkasa di bumi; angkatan orang benar akan diberkati.",
              "Harta dan kekayaan ada dalam rumahnya, kebajikannya tetap untuk selamanya.",
              "Di dalam gelap terbit terang bagi orang benar; pengasih dan penyayang orang yang adil.",
              "Mujur orang yang menaruh belas kasihan dan yang memberi pinjaman, yang melakukan urusannya dengan sewajarnya.",
              "Sebab ia takkan goyah untuk selama-lamanya; orang benar itu akan diingat selama-lamanya.",
              "Ia tidak takut kepada kabar celaka, hatinya tetap, penuh kepercayaan kepada Tuhan.",
              "Hatinya teguh, ia tidak takut, sehingga ia memandang rendah para lawannya.",
              "Ia membagi-bagikan, ia memberikan kepada orang miskin; kebajikannya tetap untuk selama-lamanya, tanduknya meninggi dalam kemuliaan.",
              "Orang fasik melihatnya, lalu sakit hati, ia menggertakkan giginya, lalu hancur; keinginan orang fasik akan menuju kebinasaan. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 113 - Tuhan meninggikan orang rendah",
            text: [
              "Pujilah, hai hamba-hamba Tuhan, pujilah nama Tuhan!",
              "Kiranya nama Tuhan dimasyhurkan, sekarang ini dan selama-lamanya.",
              "Dari terbitnya sampai kepada terbenamnya matahari terpujilah nama Tuhan.",
              "Tuhan tinggi mengatasi segala bangsa, kemuliaan-Nya mengatasi langit.",
              "Siapakah seperti Tuhan, Allah kita, yang diam di tempat yang tinggi,",
              "yang merendahkan diri untuk melihat ke langit dan ke bumi?",
              "Ia menegakkan orang yang hina dari dalam debu dan mengangkat orang yang miskin dari lumpur,",
              "untuk mendudukkan dia bersama-sama dengan para bangsawan, bersama-sama dengan para bangsawan bangsanya.",
              "Ia mendudukkan perempuan yang mandul di rumah sebagai ibu anak-anak, penuh sukacita. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 116:1-9 - Terluput dari belenggu maut",
            text: [
              "Aku mengasihi Tuhan, sebab Ia mendengarkan suaraku dan permohonanku.",
              "Sebab Ia menyendengkan telinga-Nya kepadaku, maka seumur hidupku aku akan berseru kepada-Nya.",
              "Tali-tali maut telah meliliti aku, dan kegentaran terhadap dunia orang mati menimpa aku, aku mengalami kesesakan dan kedukaan.",
              "Tetapi aku menyerukan nama Tuhan: ”Ya Tuhan, luputkanlah kiranya aku!”",
              "Tuhan adalah pengasih dan adil, Allah kita penyayang.",
              "Tuhan memelihara orang-orang sederhana; aku sudah lemah, tetapi diselamatkan-Nya aku.",
              "Kembalilah tenang, hai jiwaku, sebab Tuhan telah berbuat baik kepadamu.",
              "Ya, Engkau telah meluputkan aku dari pada maut, dan mataku dari pada air mata, dan kakiku dari pada tersandung.",
              "Aku boleh berjalan di hadapan Tuhan, di negeri orang-orang hidup. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 116:10-19 - Terluput dari belenggu maut",
            text: [
              "Aku percaya, sekalipun aku berkata: ”Aku ini sangat tertindas.”",
              "Aku ini berkata dalam kebingunganku: ”Semua manusia pembohong.”",
              "Bagaimana akan kubalas kepada Tuhan segala kebajikan-Nya kepadaku?",
              "Aku akan mengangkat piala keselamatan, dan akan menyerukan nama Tuhan,",
              "akan membayar nazarku kepada Tuhan di depan seluruh umat-Nya.",
              "Berharga di mata Tuhan kematian semua orang yang dikasihi-Nya.",
              "Ya Tuhan, aku hamba-Mu! Aku hamba-Mu, anak dari hamba-Mu perempuan! Engkau telah membuka ikatan-ikatanku!",
              "Aku akan mempersembahkan korban syukur kepada-Mu, dan akan menyerukan nama Tuhan,",
              "akan membayar nazarku kepada Tuhan di depan seluruh umat-Nya,",
              "di pelataran rumah Tuhan, di tengah-tengahmu, ya Yerusalem! ALLELUIA."
            ]
          }
        ]
      },
      {
        title: "III. Injil Kudus",
        subTitle: "Lukas 9:10-17 (Mukjizat Lima Roti)",
        parts: [
          {
            label: "Injil Lukas",
            text: [
              "Kudus, kudus, kudus. Pembacaan Injil Kudus menurut guru kita Santo Lukas. Kiranya berkat-berkatnya beserta kita semua. Amin.",
              "Sekembalinya rasul-rasul itu menceriterakan kepada Yesus apa yang telah mereka kerjakan. Lalu Yesus membawa mereka dan menyingkir ke sebuah kota yang bernama Betsaida, sehingga hanya mereka saja bersama Dia.",
              "Akan tetapi orang banyak mengetahuinya, lalu mengikuti Dia. Ia menerima mereka dan berkata-kata kepada mereka tentang Kerajaan Allah dan Ia menyembuhkan orang-orang yang memerlukan penyembuhan.",
              "Pada waktu hari mulai malam datanglah kedua belas murid-Nya kepada-Nya dan berkata: \”Suruhlah orang banyak itu pergi, supaya mereka pergi ke desa-desa dan kampung-kampung sekitar ini untuk mencari tempat penginapan dan makanan, karena di sini kita berada di tempat yang sunyi.\”",
              "Tetapi Ia berkata kepada mereka: \”Kamu harus memberi mereka makan!\” Mereka menjawab: \”Yang ada pada kami tidak lebih dari pada lima roti dan dua ikan, kecuali kalau kami pergi membeli makanan untuk semua orang banyak ini.\”",
              "Sebab di situ ada kira-kira lima ribu orang laki-laki. Lalu Ia berkata kepada murid-murid-Nya: \”Suruhlah mereka duduk berkelompok-kelompok, kira-kira lima puluh orang sekelompok.\”",
              "Murid-murid melakukannya dan menyuruh semua orang banyak itu duduk.",
              "Dan setelah Ia mengambil lima roti dan dua ikan itu, Ia menengadah ke langit, mengucap berkat, lalu memecah-mecahkan roti itu dan memberikannya kepada murid-murid-Nya supaya dibagi-bagikannya kepada orang banyak.",
              "Dan mereka semuanya makan sampai kenyang. Kemudian dikumpulkan potongan-potongan roti yang sisa sebanyak dua belas bakul."
            ]
          },
          {
            label: "Kemuliaan kepada Allah selamanya. Amin.",
            text: [
              "Ten-oo aesh. tem-mok o pie-ekhr-iestos nem pe-kyot en agha-thos nem-pi epnevma etho-wab je a-ki ak-soati em-mon nai na-n.",
              "(Kami menyembah-Mu ya Kristus, bersama Bapa-Mu Yang Baik dan Roh Kudus, karena Engkau datang dan menyelamatkan kami, kasihanilah kami.)"
            ]
          }
        ]
      },
      {
        title: "IV. Litani Jam Kesembilan",
        subTitle: "Pertobatan Penyamun di Salib",
        parts: [
          {
            label: "Litani Pertama",
            text: [
              "Ya Engkau, yang mengalami kematian jasmani pada jam kesembilan bagi kami orang-orang berdosa; matikanlah kedagingan kami, ya Kristus Allah kami, dan lepaskanlah kami. Biarlah permohonanku sampai kepada-Mu, ya Tuhan: berilah pengertian bagiku menurut perkataan-Mu. Biarlah permohonanku sampai dihadirat-Mu dan berilah kehidupan bagiku melalui firman-Mu.",
              "\“Doksa patri ke eiyo-ke-agi-yo pnevmaty\“",
              "(Kemuliaan kepada Bapa dan Putra dan Roh Kudus)"
            ]
          },
          {
            label: "Litani Kedua",
            text: [
              "Ya Engkau, Yang Maha Baik, yang pada jam kesembilan, menyerahkan jiwa-Mu didalam tangan Bapa, pada waktu Engkau terpaku di kayu salib, dan menuntun pencuri yang disalib bersama-Mu untuk masuk ke Taman Firdaus, jangan mengabaikan atau menolak aku karena aku telah sesat; tetapi kuduskanlah jiwaku, terangilah pikiranku dan izinkanlah aku untuk mengambil bagian dari anugerah misteri Pemberi Hidup-Mu, supaya ketika aku merasakan kebaikan-Mu, aku dapat memberi pujian tanpa malas, merindukan kemuliaan-Mu di atas segalanya. Ya Kristus Tuhan kami, bebaskanlah kami.",
              "\“Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen.\”",
              "Sekarang dan selama-lamanya. Amin"
            ]
          },
          {
            label: "Litani Ketiga",
            text: [
              "O Engkau, Yang Maha Baik, yang dilahirkan oleh Sang Perawan, dan memikul penderitaan kayu salib bagi kami, melalui kematian-Mu Engkau mengalahkan kematian dan dengan kebangkitan-Mu Engkau menyatakan kehidupan kekal. Ya Tuhan, janganlah memalingkan muka-Mu dari mereka yang Engkau ciptakan dengan tangan-Mu sendiri, tetapi perlihatkanlah kasih-Mu kepada manusia ya Tuhan yang baik. Terimalah permohonan Bunda Perawan demi kami, ya Juruselamat, bebaskanlah umat-Mu yang hina. Janganlah tinggalkan kami hingga akhir, dan jangan abaikan kami selamanya. Janganlah putuskan perjanjian-Mu dan ambillah kasihan-Mu dari kami, demi Abraham kekasih-Mu, Ishak hamba-Mu dan Israel orang kudus-Mu.",
              "\“Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen.\”",
              "Sekarang dan selama-lamanya. Amin"
            ]
          },
          {
            label: "Litani Keempat",
            text: [
              "Ketika Pencuri melihat Sang Pemberi Hidup tergantung diatas atas kayu salib, ia berkata: \"Bukankah Dia yang disalib bersama kita adalah Allah yang menjelma menjadi manusia, sehingga matahari tidak akan menyembunyikan cahayanya atau bumi gemetar ketakutan. Tetapi Engkau, Yang Maha Kuasa, yang menanggung segalanya, ingatlah akan aku ya Tuhan bila Engkau masuk ke Kerajaan-Mu.\"",
              "\“Doksa patri ke eiyo-ke-agi-yo pnevmaty\“",
              "(Kemuliaan kepada Bapa dan Putra dan Roh Kudus)"
            ]
          },
          {
            label: "Litani Kelima",
            text: [
              "Ya Engkau, Yang Maha Baik, yang menerima pengakuan pencuri di kayu salib, terimalah kami yang sebenarnya patut menerima hukuman mati karena dosa-dosa kami. Kami semua mengakui dosa-dosa kami, menyatakan ketuhanan-Mu bersama pencuri dengan berkata: \"Ya Tuhan ingatlah kami bila Engkau masuk ke Kerajaan-Mu.\"",
              "\“Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen.\”",
              "Sekarang dan selama-lamanya. Amin"
            ]
          },
          {
            label: "Litani Keenam",
            text: [
              "Ketika sang Bunda melihat Domba, Gembala dan Juruselamat dunia tergantung di atas kayu salib, ia menangis dan sangat bersedih. \"Dunia bersukacita karena menerima keselamatan, tetapi hatiku hancur ketika aku melihat penyaliban yang Engkau tanggung demi keselamatan semua orang, ya Anakku dan Allahku.\""
            ]
          },
          {
            label: "Kyrie Eleison",
            text: [
              "Ya Tuhan, dengarlah kami, kasihanilah kami, dan ampunilah dosa-dosa kami. Amin.",
              "Tuhan kasihanilah (Kyrie Eleison) 41 kali."
            ]
          }
        ]
      },
      {
        title: "V. DOA KUDUS",
        subTitle: "KUDUS, KUDUS, KUDUS Jam Kesembilan",
        parts: [
          {
            label: "KUDUS KUDUS KUDUS",
            text: [
              "Kudus, kudus, kuduslah Tuhan pemimpin pasukan malaikat, Sabaoth. Surga dan Bumi penuh dengan hormat dan kemuliaan-Mu. Kasihanilah kami, Ya Allah Bapa yang Maha Kuasa, Pantokrator.",
              "Ya Tritunggal Maha Kudus kasihanilah kami.",
              "Ya Tuhan, Allah pemimpin pasukan malaikat, sertailah kami. Karena kami tidak mempunyai penolong di dalam kesukaran dan kemalangan, tetapi hanya Engkau saja.",
              "Ya Allah bebaskan, ampuni dan hapuskanlah dosa-dosa yang telah kami perbuat secara sengaja dan tidak sengaja, sadar dan tidak-sadar, yang tersembunyi dan yang terlihat.",
              "Ya Tuhan ampunilah kami demi nama-Mu yang Kudus yang dipanggil atas kami, menurut belas kasihan-Mu dan bukan menurut dosa-dosa kami."
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      },
      {
        title: "VI. Absolusi Jam Kesembilan",
        subTitle: "Doa Absolusi Pembebasan Diri",
        parts: [
          {
            label: "Doa Absolusi",
            text: [
              "Ya Allah, Yang Maha Baik, Bapa Tuhan kami, Allah dan Juruselamat kami Yesus Kristus, melalui kedatangan-Mu Engkau menyelamatkan dan membebaskan kami dari perbudakan musuh.",
              "Kami memohon kepada-Mu, di dalam nama Dia yang mulia, untuk memalingkan pikiran kami dari keinginan duniawi dan hawa nafsu kedagingan kepada ketetapan-ketetapan surgawi-Mu, dan sempurnakan bagi kami kasih-Mu pada umat manusia.",
              "Terimalah doa kami setiap waktu dan juga doa jam kesembilan ini agar berkenan kepada-Mu. Layakkan kami berjalan menurut panggilan yang kami terima, sehingga bila kami meninggalkan dunia ini, kiranya kami boleh terhitung bersama mereka yang menyembah Anak-Mu Yang Tunggal, Tuhan kami Yesus Kristus. Sehingga, kami beroleh belas kasihan dan pengampunan akan dosa-dosa kami dan keselamatan, bersama paduan suara para orang kudus yang sungguh menyenangkan hati-Mu dari permulaan dan selamanya.",
              "Ya Tuhan buanglah segala kuasa musuh dan pasukan kegelapan yang telah dihancurkan oleh Putra-Mu Yang Tunggal melalui kuasa salib-Nya yang menghidupkan.",
              "Terimalah kami ya Tuhan Yesus Kristus seperti Engkau menerima pencuri di sebelah kanan-Mu di atas kayu salib. Terangilah kami seperti Engkau menerangi mereka yang berada di dalam kegelapan di alam maut, dan pulihkanlah bagi kami sukacita dari Taman Firdaus. Sebab Engkau, Tuhan kami, Allah yang terpuji, layak menerima, kemuliaan, hormat, keagungan, kuasa dan sembah, bersama Bapa-Mu yang Baik dan Roh Kudus, selamanya. Amin."
            ]
          }
        ]
      },
      {
        title: "VII. Penutup Jam Kesembilan",
        subTitle: "Selesai Sembahyang Sore",
        parts: [
          {
            label: "Doa Penutup",
            text: [
              "Kasihanilah kami, ya Allah, kasihanilah kami, Engkau yang setiap waktu dan saat selalu disembah dan dimuliakan di bumi dan di surga.",
              "Kristus, Tuhan kami yang baik, yang penuh kesabaran, yang melimpah dalam kemurahan, dan besar dalam belas kasihan; yang mencintai orang benar dan berbelas kasihan terhadap orang berdosa, terutama dirikulah yang paling berdosa. Engkau tidak menghendaki kematian orang berdosa, melainkan agar dia bertobat dan hidup, memanggil semua orang untuk diselamatkan, supaya mereka memperoleh janji akan hal-hal yang baik di masa yang akan datang.",
              "Tuhan, terimalah doa kami pada jam ini dan setiap waktu. Permudahlah hidup kami, dan tuntunlah kami untuk bertindak menurut perintah-Mu. Kuduskanlah jiwa kami. Bersihkanlah tubuh kami. Bimbinglah pikiran kami. Murnikanlah keinginan kami. Sembuhkanlah sakit kami. Ampunilah dosa-dosa kami. Lepaskanlah kami dari segala kesedihan dan penderitaan batin.",
              "Kelilingilah kami dengan malaikat-Mu yang kudus supaya kami dijaga dan dituntun oleh mereka, dan mencapai kesatuan iman dan pengetahuan mengenai kemuliaan-Mu yang tidak dapat dimengerti dan tanpa batas, karena Engkau mulia sampai selama-lamanya. Amin.",
              "(Lanjutkan dengan doa pribadi masing-masing dan diakhiri dengan Doa Bapa Kami)"
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "vespers",
    title: "Jam Kesebelas",
    titleEn: "Vespers",
    timeText: "17:00 (Sore/Senja)",
    theme: "Penurunan Tubuh Kristus dari Salib dan Akhir Hari",
    description: "Ibadah senja atau matahari terbenam. Merenungkan saat tubuh kudus Kristus diturunkan dari salib, serta mengingatkan kita akan akhir dari kehidupan duniawi ini.",
    sections: [
      {
        title: "I. Pendahuluan (Pengantar Doa)",
        subTitle: "Doa Senja & Doa Syukur",
        parts: [
          { label: "Tanda Salib", text: corePrayers.tandaSalib.text },
          { label: "Bapa Kami", text: corePrayers.doaTuhan.text },
          { label: "Doa Ucapan Syukur", text: corePrayers.doaSyukur.text },
          { label: "Mazmur 51", text: corePrayers.mazmur51.text }
        ]
      },
      {
        title: "II. Mazmur-Mazmur Agpeya",
        subTitle: "Mazmur Pilihan untuk Senja",
        parts: [
          {
            label: "Ucapan Umat",
            text: [
              "Doa Jam Kesebelas pada hari yang diberkati ini kupanjatkan kepada Kristus Rajaku dan Allahku, memohon kepada-Nya untuk mengampuni segala dosaku.",
              "Dari Mazmur Daud, bapa kita, nabi dan raja, semoga berkat-berkatnya menyertai kita semua. Amin."
            ]
          },
          {
            label: "Mazmur 117 - Pujilah Tuhan, hai segala bangsa",
            text: [
              "Pujilah Tuhan, hai segala bangsa, megahkanlah Dia, hai segala suku bangsa!",
              "Sebab kasih-Nya hebat atas kita, dan kesetiaan Tuhan untuk selama-lamanya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 118 - Nyanyian puji-pujian",
            text: [
              "Bersyukurlah kepada Tuhan, sebab Ia baik! Bahwasanya untuk selama-lamanya kasih setia-Nya.",
              "Biarlah Israel berkata: ”Bahwasanya untuk selama-lamanya kasih setia-Nya!”",
              "Biarlah kaum Harun berkata: ”Bahwasanya untuk selama-lamanya kasih setia-Nya!”",
              "Biarlah orang yang takut akan Tuhan berkata: ”Bahwasanya untuk selama-lamanya kasih setia-Nya!”",
              "Dalam kesesakan aku telah berseru kepada Tuhan. Tuhan telah menjawab aku dengan memberi kelegaan.",
              "Tuhan di pihakku. Aku tidak akan takut. Apakah yang dapat dilakukan manusia terhadap aku?",
              "Tuhan di pihakku, menolong aku; aku akan memandang rendah mereka yang membenci aku.",
              "Lebih baik berlindung pada Tuhan dari pada percaya kepada manusia.",
              "Lebih baik berlindung pada Tuhan dari pada percaya kepada para bangsawan.",
              "Segala bangsa mengelilingi aku – demi nama Tuhan, sesungguhnya aku pukul mereka mundur.",
              "Mereka mengelilingi aku, ya mengelilingi aku – demi nama Tuhan, sesungguhnya aku pukul mereka mundur.",
              "Mereka mengelilingi aku seperti lebah, mereka menyala-nyala seperti api duri, – demi nama Tuhan, sesungguhnya aku pukul mereka mundur.",
              "Aku ditolak dengan hebat sampai jatuh, tetapi Tuhan menolong aku.",
              "Tuhan itu kekuatanku dan mazmurku; Ia telah menjadi keselamatanku.",
              "Suara sorak-sorai dan kemenangan di kemah orang-orang benar: ”Tangan kanan Tuhan melakukan keperkasaan,",
              "tangan kanan Tuhan berkuasa meninggikan, tangan kanan Tuhan melakukan keperkasaan!”",
              "Aku tidak akan mati, tetapi hidup, dan aku akan menceritakan perbuatan-perbuatan Tuhan.",
              "Tuhan telah menghajar aku dengan keras, tetapi Ia tidak menyerahkan aku kepada maut.",
              "Bukakanlah aku pintu gerbang kebenaran, aku hendak masuk ke dalamnya, hendak mengucap syukur kepada Tuhan.",
              "Inilah pintu gerbang Tuhan, orang-orang benar akan masuk ke dalamnya.",
              "Aku bersyukur kepada-Mu, sebab Engkau telah menjawab aku dan telah menjadi keselamatanku.",
              "Batu yang dibuang oleh tukang-tukang bangunan telah menjadi batu penjuru.",
              "Hal itu terjadi dari pihak Tuhan, suatu perbuatan ajaib di mata kita.",
              "Inilah hari yang dijadikan Tuhan, marilah kita bersorak-sorak dan bersukacita karenanya!",
              "Ya Tuhan, berilah kiranya keselamatan! Ya Tuhan, berilah kiranya kemujuran!",
              "Diberkatilah dia yang datang dalam nama Tuhan! Kami memberkati kamu dari dalam rumah Tuhan.",
              "Tuhanlah Allah, Dia menerangi kita. Ikatkanlah korban hari raya itu dengan tali, pada tanduk-tanduk mezbah.",
              "Allahku Engkau, aku hendak bersyukur kepada-Mu, Allahku, aku hendak meninggikan Engkau.",
              "Bersyukurlah kepada Tuhan, sebab Ia baik! Bahwasanya untuk selama-lamanya kasih setia-Nya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 120 - Dikejar-kejar fitnah",
            text: [
              "Dalam kesesakanku aku berseru kepada Tuhan dan Ia menjawab aku:",
              "”Ya Tuhan, lepaskanlah aku dari pada bibir dusta, dari pada lidah penipu.”",
              "Apakah yang diberikan kepadamu dan apakah yang ditambahkan kepadamu, hai lidah penipu?",
              "Panah-panah yang tajam dari pahlawan dan bara kayu arar.",
              "Celakalah aku, karena harus tinggal sebagai orang asing di Mesekh, karena harus diam di antara kemah-kemah Kedar!",
              "Cukup lama aku tinggal bersama-sama dengan orang-orang yang membenci perdamaian.",
              "Aku ini suka perdamaian, tetapi apabila aku berbicara, maka mereka menghendaki perang. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 121 - Tuhan, Penjaga Israel",
            text: [
              "Aku melayangkan mataku ke gunung-gunung; dari manakah akan datang pertolonganku?",
              "Pertolonganku ialah dari Tuhan, yang menjadikan langit dan bumi.",
              "Ia takkan membiarkan kakimu goyah, Penjagamu tidak akan terlelap.",
              "Sesungguhnya tidak terlelap dan tidak tertidur Penjaga Israel.",
              "Tuhanlah Penjagamu, Tuhanlah naunganmu di sebelah tangan kananmu.",
              "Matahari tidak menyakiti engkau pada waktu siang, atau bulan pada waktu malam.",
              "Tuhan akan menjaga engkau terhadap segala kecelakaan; Ia akan menjaga nyawamu.",
              "Tuhan akan menjaga keluar masukmu, dari sekarang sampai selama-lamanya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 122 - Doa sejahtera untuk Yerusalem",
            text: [
              "Aku bersukacita, ketika dikatakan orang kepadaku: ”Mari kita pergi ke rumah Tuhan.”",
              "Sekarang kaki kami berdiri di pintu gerbangmu, hai Yerusalem.",
              "Hai Yerusalem, yang telah didirikan sebagai kota yang bersambung rapat,",
              "ke mana suku-suku berziarah, yakni suku-suku Tuhan, untuk bersyukur kepada nama Tuhan sesuai dengan peraturan bagi Israel.",
              "Sebab di sanalah ditaruh kursi-kursi pengadilan, kursi-kursi milik keluarga raja Daud.",
              "Berdoalah untuk kesejahteraan Yerusalem: ”Biarlah orang-orang yang mencintaimu mendapat sentosa.",
              "Biarlah kesejahteraan ada di lingkungan tembokmu, dan sentosa di dalam purimu!”",
              "Oleh karena saudara-saudaraku and teman-temanku aku hendak mengucapkan: ”Semoga kesejahteraan ada di dalammu!”",
              "Oleh karena rumah Tuhan, Allah kita, aku hendak mencari kebaikan bagimu. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 123 - Berharap kepada anugerah Tuhan",
            text: [
              "Kepada-Mu aku melayangkan mataku, ya Engkau yang bersemayam di sorga.",
              "Lihat, seperti mata para hamba laki-laki memandang kepada tangan tuannya, seperti mata hamba perempuan memandang kepada tangan nyonyanya, demikianlah mata kita memandang kepada Tuhan, Allah kita, sampai Ia mengasihani kita.",
              "Kasihanilah kami, ya Tuhan, kasihanilah kami, sebab kami sudah cukup kenyang dengan penghinaan;",
              "jiwa kami sudah cukup kenyang dengan olok-olok orang-orang yang merasa aman, dengan penghinaan orang-orang yang sombong. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 124 - Terpujilah Penolong Israel",
            text: [
              "Jikalau bukan Tuhan yang memihak kepada kita, – biarlah Israel berkata demikian –",
              "jikalau bukan Tuhan yang memihak kepada kita, ketika manusia bangkit melawan kita,",
              "maka mereka telah menelan kita hidup-hidup, ketika amarah mereka menyala-nyala terhadap kita;",
              "maka air telah menghanyutkan kita, dan sungai telah mengalir melingkupi diri kita,",
              "maka telah mengalir melingkupi diri kita air yang meluap-luap itu.",
              "Terpujilah Tuhan yang tidak menyerahkan kita menjadi mangsa bagi gigi mereka!",
              "Jiwa kita terluput seperti burung dari jerat penangkap burung; jerat itu telah putus, dan kita pun terluput!",
              "Pertolongan kita adalah dalam nama Tuhan, yang menjadikan langit dan bumi. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 125 - Aman dalam lindungan Tuhan",
            text: [
              "Orang-orang yang percaya kepada Tuhan adalah seperti gunung Sion yang tidak goyang, yang tetap untuk selama-lamanya.",
              "Yerusalem, gunung-gunung sekelilingnya; demikianlah Tuhan sekeliling umat-Nya, dari sekarang sampai selama-lamanya.",
              "Tongkat kerajaan orang fasik tidak akan tinggal tetap di atas tanah yang diundikan kepada orang-orang benar, supaya orang-orang benar tidak mengulurkan tangannya kepada kejahatan.",
              "Lakukanlah kebaikan, ya Tuhan, kepada orang-orang baik dan kepada orang-orang yang tulus hati;",
              "tetapi orang-orang yang menyimpang ke jalan yang berbelit-belit, kiranya Tuhan mengenyahkan mereka bersama-sama orang-orang yang melakukan kejahatan. Damai sejahtera atas Israel! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 126 - Pengharapan di tengah-tengah penderitaan",
            text: [
              "Ketika Tuhan memulihkan keadaan Sion, keadaan kita seperti orang-orang yang bermimpi.",
              "Pada waktu itu mulut kita penuh dengan tertawa, dan lidah kita dengan sorak-sorai.",
              "Pada waktu itu berkatalah orang di antara bangsa-bangsa: ”Tuhan telah melakukan perkara besar kepada orang-orang ini!”",
              "Tuhan telah melakukan perkara besar kepada kita, maka kita bersukacita.",
              "Pulihkanlah keadaan kami, ya Tuhan, seperti memulihkan batang air kering di Tanah Negeb!",
              "Orang-orang yang menabur dengan mencucurkan air mata, akan menuai dengan bersorak-sorai.",
              "Orang yang berjalan maju dengan menangis sambil menabur benih, pasti pulang dengan sorak-sorai sambil membawa berkas-berkasnya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 127 - Berkat Tuhan pangkal selamat",
            text: [
              "Jikalau bukan Tuhan yang membangun rumah, sia-sialah usaha orang yang membangunnya; jikalau bukan Tuhan yang mengawal kota, sia-sialah pengawal berjaga-jaga.",
              "Sia-sialah kamu bangun pagi-pagi dan duduk-duduk sampai jauh malam, dan makan roti yang diperoleh dengan susah payah – sebab Ia memberikannya kepada yang dicintai-Nya pada waktu tidur.",
              "Sesungguhnya, anak-anak lelaki adalah milik pusaka dari pada Tuhan, dan buah kandungan adalah suatu upah.",
              "Seperti anak-anak panah di tangan pahlawan, demikianlah anak-anak pada masa muda.",
              "Berbahagialah orang yang telah membuat penuh tabung panahnya dengan semuanya itu. Ia tidak akan mendapat malu, apabila ia berbicara dengan musuh-musuh di pintu gerbang. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 128 - Berkat atas rumah tangga",
            text: [
              "Berbahagialah setiap orang yang takut akan Tuhan, yang hidup menurut jalan yang ditunjukkan-Nya!",
              "Apabila engkau memakan hasil jerih payah tanganmu, berbahagialah engkau and baiklah keadaanmu!",
              "Isterimu akan menjadi seperti pohon anggur yang subur di dalam rumahmu; anak-anakmu seperti tunas pohon zaitun sekeliling mejamu!",
              "Sesungguhnya demikianlah akan diberkati orang laki-laki yang takut akan Tuhan.",
              "Kiranya Tuhan memberkati engkau dari Sion, supaya engkau melihat kebahagiaan Yerusalem seumur hidupmu, dan melihat anak-anak dari anak-anakmu! Damai sejahtera atas Israel! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 129 - Terluput dari kesesakan",
            text: [
              "Mereka telah cukup menyesakkan aku sejak masa mudaku – biarlah Israel berkata demikian –",
              "mereka telah cukup menyesakkan aku sejak masa mudaku, tetapi mereka tidak dapat mengalahkan aku.",
              "Di atas punggungku pembajak membajak, membuat panjang alur bajak mereka.",
              "Tuhan itu adil, Ia memotong tali-tali orang fasik.",
              "Semua orang yang membenci Sion akan mendapat malu dan akan mundur.",
              "Mereka seperti rumput di atas sotoh, yang menjadi layu, sebelum dicabut, yang tidak digenggam tangan penyabit, atau dirangkum orang yang mengikat berkas,",
              "sehingga orang-orang yang lewat tidak berkata: ”Berkat Tuhan atas kamu! Kami memberkati kamu dalam nama Tuhan!” ALLELUIA."
            ]
          }
        ]
      },
      {
        title: "III. Injil Kudus",
        subTitle: "Lukas 4:38-41 (Penyembuhan Ibu Mertua Petrus)",
        parts: [
          {
            label: "Injil Lukas",
            text: [
              "Kudus, kudus, kudus. Pembacaan Injil Kudus menurut guru kita Santo Lukas. Kiranya berkat-berkatnya beserta kita semua. Amin.",
              "Kemudian Ia meninggalkan rumah ibadat itu dan pergi ke rumah Simon. Adapun ibu mertua Simon demam keras dan mereka meminta kepada Yesus supaya menolong dia.",
              "Maka Ia berdiri di sisi perempuan itu, lalu menghardik demam itu, dan penyakit itu pun meninggalkan dia. Perempuan itu segera bangun dan melayani mereka.",
              "Ketika matahari terbenam, semua orang membawa kepada-Nya orang-orang sakitnya, yang menderita bermacam-macam penyakit. Ia pun meletakkan tangan-Nya atas mereka masing-masing dan menyembuhkan mereka.",
              "Dari banyak orang keluar juga setan-setan sambil berteriak: \”Engkau adalah Anak Allah.\” Lalu Ia dengan keras melarang mereka dan tidak memperbolehkan mereka berbicara, karena mereka tahu bahwa Ia adalah Mesias."
            ]
          },
          {
            label: "Kemuliaan kepada Allah selamanya. Amin.",
            text: [
              "Ten-oo aesh. tem-mok o pie-ekhr-iestos nem pe-kyot en agha-thos nem-pi epnevma etho-wab je a-ki ak-soati em-mon nai na-n.",
              "(Kami menyembah-Mu ya Kristus, bersama Bapa-Mu Yang Baik dan Roh Kudus, karena Engkau datang dan menyelamatkan kami, kasihanilah kami.)"
            ]
          }
        ]
      },
      {
        title: "IV. Litani Jam Kesebelas",
        subTitle: "Merenungkan Kekhilafan Hidup",
        parts: [
          {
            label: "Litani Pertama",
            text: [
              "Apabila orang benar hampir-hampir tidak diselamatkan, bagaimana dengan aku orang yang berdosa, kemanakah aku akan pergi? Karena kelemahan manusiawi ku, aku tidak dapat bertahan. Tetapi Ya Allah Yang Pengasih, perhitungkanlah aku bersama dengan kami semua pada jam kesebelas.",
              "Sebab dalam kesalahan aku dikandung, dan dalam dosa, ibuku melahirkan aku. Oleh sebab itu, aku tidak berani memandang ke surga, tetapi sebaliknya aku bersandar pada melimpahnya kemurahan dan kasih-Mu kepada manusia, aku berseru dan berkata, \"Tuhan ampunilah aku orang berdosa, dan kasihanilah aku.\"",
              "\"Doksapatrike eiyo-ke-agi-yo pnevmaty\"",
              "(Kemuliaan kepada Bapa dan Putra dan Roh Kudus)"
            ]
          },
          {
            label: "Litani Kedua",
            text: [
              "Bergegaslah, Ya Juruselamat, bukakanlah bagiku pelukan bapa, karena aku telah menghabiskan waktuku untuk kesenangan dan berbagai macam nafsu, hari telah berlalu dan lenyap. Oleh sebab itu, sekarang aku bergantung kepada besarnya belas kasihan-Mu yang tak pernah berakhir. Oleh sebab itu, jangan abaikan hati yang patuh yang memerlukan kemurahan hati-Mu. Dengan rendah hati kepada-Mu, Ya Tuhan, aku berseru, \"Bapa, aku telah berdosa terhadap Engkau dan terhadap Surga, aku tidak layak untuk disebut anak-Mu, perlakukanlah aku seperti hamba-Mu.\"",
              "\"Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen.\"",
              "(Sekarang dan selama-lamanya. Amin.)"
            ]
          },
          {
            label: "Litani Ketiga",
            text: [
              "Setiap kesalahan, dan setiap dosa yang aku perbuat dengan tekun dan penuh semangat, aku sangat layak menerima siksaan dan penghakiman. Oleh sebab itu, siapkanlah bagiku jalan pertobatan, ya Bunda Sang Perawan, sebab kepadamulah aku memohon melalui syafaatmu, aku berseru tolonglah aku supaya aku jangan malu. Dan bila jiwaku meninggalkan tubuhku, kalahkanlah rencana musuh, tutuplah pintu neraka supaya jangan menelan jiwaku, ya engkaulah mempelai wanita Tuhan yang benar, yang tiada bercacat."
            ]
          },
          {
            label: "Kyrie Eleison",
            text: [
              "Ya Tuhan, dengarlah kami, kasihanilah kami, dan ampunilah dosa-dosa kami. Amin.",
              "Tuhan kasihanilah (Kyrie Eleison) 41 kali."
            ]
          }
        ]
      },
      {
        title: "V. DOA KUDUS",
        subTitle: "KUDUS, KUDUS, KUDUS Jam Kesebelas",
        parts: [
          {
            label: "KUDUS KUDUS KUDUS",
            text: [
              "Kudus, kudus, kuduslah Tuhan pemimpin pasukan malaikat, Sabaoth. Surga dan Bumi penuh dengan hormat dan kemuliaan-Mu. Kasihanilah kami, Ya Allah Bapa yang Maha Kuasa, Pantokrator.",
              "Ya Tritunggal Maha Kudus kasihanilah kami.",
              "Ya Tuhan, Allah pemimpin pasukan malaikat, sertailah kami. Karena kami tidak mempunyai penolong di dalam kesukaran dan kemalangan, tetapi hanya Engkau saja.",
              "Ya Allah bebaskan, ampuni dan hapuskanlah dosa-dosa yang telah kami perbuat secara sengaja dan tidak sengaja, sadar dan tidak-sadar, yang tersembunyi dan yang terlihat.",
              "Ya Tuhan ampunilah kami demi nama-Mu yang Kudus yang dipanggil atas kami, menurut belas kasihan-Mu dan bukan menurut dosa-dosa kami."
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      },
      {
        title: "VI. Absolusi Jam Kesebelas",
        subTitle: "Doa Absolusi Pembebasan Diri",
        parts: [
          {
            label: "Doa Absolusi",
            text: [
              "Kami bersyukur pada-Mu, Raja kami yang penuh belas kasihan, karena Engkau membuat kami melewati hari ini dalam damai dan menghantar kami kepada malam dengan penuh ucapan syukur dan membuat kami layak melihat cahaya terang hingga matahari terbenam.",
              "Ya Allah, terimalah kemuliaan yang kami berikan kepada-Mu dan selamatkan kami dari tipu muslihat musuh dan lenyapkan semua perangkap untuk melawan kami.",
              "Berikanlah kami pada malam ini, damai tanpa rasa sakit, atau kegelisahan atau ketidaktenangan atau khayalan; supaya kami dapat melewati malam dalam damai dan kesucian serta bangun untuk memuji dan berdoa. Setiap waktu dan di manapun kami memuji dan memuliakan nama-Mu yang kudus di dalam segala hal, bersama dengan Bapa, yang melampaui akal dan tanpa awal, dan bersama Roh Kudus, Pemberi Kehidupan yang sehakekat dengan-Mu, sekarang dan setiap waktu, dan dari segala abad hingga segala abad. Amin."
            ]
          }
        ]
      },
      {
        title: "VII. Penutup Jam Kesebelas",
        subTitle: "Selesai Sembahyang Sore",
        parts: [
          {
            label: "Doa Penutup",
            text: [
              "Kasihanilah kami, ya Allah, kasihanilah kami, Engkau yang setiap waktu dan saat selalu disembah dan dimuliakan di bumi dan di surga.",
              "Kristus, Tuhan kami yang baik, yang penuh kesabaran, yang melimpah dalam kemurahan, dan besar dalam belas kasihan; yang mencintai orang benar dan berbelas kasihan terhadap orang berdosa, terutama dirikulah yang paling berdosa. Engkau tidak menghendaki kematian orang berdosa, melainkan agar dia bertobat dan hidup, memanggil semua orang untuk diselamatkan, supaya mereka memperoleh janji akan hal-hal yang baik di masa yang akan datang.",
              "Tuhan, terimalah doa kami pada jam ini dan setiap waktu. Permudahlah hidup kami, dan tuntunlah kami untuk bertindak menurut perintah-Mu. Kuduskanlah jiwa kami. Bersihkanlah tubuh kami. Bimbinglah pikiran kami. Murnikanlah keinginan kami. Sembuhkanlah sakit kami. Ampunilah dosa-dosa kami. Lepaskanlah kami dari segala kesedihan dan penderitaan batin.",
              "Kelilingilah kami dengan malaikat-Mu yang kudus supaya kami dijaga dan dituntun oleh mereka, dan mencapai kesatuan iman dan pengetahuan mengenai kemuliaan-Mu yang tidak dapat dimengerti dan tanpa batas, karena Engkau mulia sampai selama-lamanya. Amin.",
              "(Lanjutkan dengan doa pribadi masing-masing dan diakhiri dengan Doa Bapa Kami)"
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "compline",
    title: "Jam Keduabelas",
    titleEn: "Compline",
    timeText: "18:00 (Sebelum Tidur)",
    theme: "Pemakaman Kristus dan Kesiapan Menghadapi Kematian",
    description: "Didoakan sesaat sebelum tidur malam. Mengingat saat tubuh mulia Kristus dibaringkan di dalam kubur batu, sekaligus menjadi pengingat rohani akan tidur abadi (kematian jasmani).",
    sections: [
      {
        title: "I. Pendahuluan (Pengantar Doa)",
        subTitle: "Doa Malam & Doa Syukur",
        parts: [
          { label: "Tanda Salib", text: corePrayers.tandaSalib.text },
          { label: "Bapa Kami", text: corePrayers.doaTuhan.text },
          { label: "Doa Ucapan Syukur", text: corePrayers.doaSyukur.text },
          { label: "Mazmur 51", text: corePrayers.mazmur51.text }
        ]
      },
      {
        title: "II. Mazmur-Mazmur Agpeya",
        subTitle: "Mazmur Pembawa Kedamaian Tidur",
        parts: [
          {
            label: "Ucapan Umat",
            text: [
              "Doa Jam Keduabelas pada hari yang diberkati ini kupanjatkan kepada Kristus Rajaku dan Allahku, memohon kepada-Nya untuk mengampuni segala dosaku.",
              "Dari Mazmur Daud, bapa kita, nabi dan raja, semoga berkat-berkatnya menyertai kita semua. Amin."
            ]
          },
          {
            label: "Mazmur 130 - Seruan dari dalam kesusahan",
            text: [
              "Dari jurang yang dalam aku berseru kepada-Mu, ya Tuhan!",
              "Tuhan, dengarkanlah suaraku! Biarlah telinga-Mu menaruh perhatian kepada suara permohonanku.",
              "Jika Engkau, ya Tuhan, mengingat-ingat kesalahan-kesalahan, Tuhan, siapakah yang dapat tahan?",
              "Tetapi pada-Mu ada pengampunan, supaya Engkau ditakuti orang.",
              "Aku menanti-nantikan Tuhan, jiwaku menanti-nanti, dan aku mengharapkan firman-Nya.",
              "Jiwaku mengharapkan Tuhan lebih dari pada pengawal mengharapkan pagi, lebih dari pada pengawal mengharapkan pagi.",
              "Berharaplah kepada Tuhan, hai Israel! Sebab pada Tuhan ada kasih setia, dan Ia banyak kali mengadakan pembebasan.",
              "Dialah yang akan membebaskan Israel dari segala kesalahannya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 131 - Menyerah kepada Tuhan",
            text: [
              "Tuhan, aku tidak tinggi hati, dan tidak memandang dengan sombong; aku tidak mengejar hal-hal yang terlalu besar atau hal-hal yang terlalu ajaib bagiku.",
              "Sesungguhnya, aku telah menenangkan dan mendiamkan jiwaku; seperti anak yang disapih berbaring dekat ibunya, ya, seperti anak yang disapih jiwaku dalam diriku.",
              "Berharaplah kepada Tuhan, hai Israel, dari sekarang sampai selama-lamanya! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 132 - Daud dan Sion, pilihan Tuhan",
            text: [
              "Ingatlah, ya Tuhan, kepada Daud dan segala penderitaannya,",
              "bagaimana ia telah bersumpah kepada Tuhan, telah bernazar kepada Yang Mahakuat dari Yakub:",
              "\"Sesungguhnya aku tidak akan masuk ke dalam kemah kediamanku, tidak akan berbaring di ranjang petiduranku,",
              "sesungguhnya aku tidak akan membiarkan mataku tidur atau membiarkan kelopak mataku terlelap,",
              "sampai aku mendapat tempat untuk Tuhan, kediaman untuk Yang Mahakuat dari Yakub.\"",
              "Memang kita telah mendengar tentang itu di Efrata, telah mendapatnya di padang Yaar.",
              "\"Mari kita pergi ke kediaman-Nya, sujud menyembah pada tumpuan kaki-Nya.\"",
              "Bangunlah, ya Tuhan, dan pergilah ke tempat perhentian-Mu, Engkau serta tabut kekuatan-Mu!",
              "Biarlah imam-imam-Mu berpakaian kebenaran, dan bersorak-sorai orang-orang yang Kaukasihi!",
              "Oleh karena Daud, hamba-Mu, janganlah Engkau menolak orang yang Kauurapi!",
              "Tuhan telah menyatakan sumpah setia kepada Daud, Ia tidak akan memungkirinya:",
              "\"Seorang anak kandungmu akan Kududukkan di atas takhtamu;",
              "jika anak-anakmu berpegang pada perjanjian-Ku, dan pada peraturan-peraturan-Ku yang Kuajarkan kepada mereka, maka anak-anak mereka selama-lamanya akan duduk di atas takhtamu.\"",
              "Sebab Tuhan telah memilih Sion, mengingininya menjadi tempat kedudukan-Nya:",
              "\"Inilah tempat perhentian-Ku selama-lamanya, di sini Aku hendak diam, sebab Aku mengingininya.",
              "Perbekalannya akan Kuberkati dengan limpahnya, orang-orangnya yang miskin akan Kukenyangkan dengan roti,",
              "imam-imamnya akan Kukenakan pakaian keselamatan, dan orang-orangnya yang saleh akan bersorak-sorai dengan girang.",
              "Di sanalah Aku akan menumbuhkan sebuah tanduk bagi Daud, Aku akan menyediakan sebuah pelita bagi orang yang Kuurapi.",
              "Musuh-musuhnya akan Kukenakan pakaian penuh malu, tetapi di atas kepalanya akan bersemarak mahkotanya.\" ALLELUIA."
            ]
          },
          {
            label: "Mazmur 133 - Persaudaraan yang rukun",
            text: [
              "Sungguh, alangkah baiknya dan indahnya, apabila saudara-saudara diam bersama dengan rukun!",
              "Seperti minyak yang baik di atas kepala meleleh ke janggut, yang meleleh ke janggut Harun dan ke leher jubahnya.",
              "Seperti embun gunung Hermon yang turun ke atas gunung-gunung Sion. Sebab ke sanalah Tuhan memerintahkan berkat, kehidupan untuk selama-lamanya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 134 - Puji-pujian pada malam hari",
            text: [
              "Mari, pujilah Tuhan, hai semua hamba Tuhan, yang datang melayani di rumah Tuhan pada waktu malam.",
              "Angkatlah tanganmu ke tempat kudus dan pujilah Tuhan!",
              "Kiranya Tuhan yang menjadikan langit dan bumi, memberkati engkau dari Sion. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 137 - Di tepi sungai-sungai Babel",
            text: [
              "Di tepi sungai-sungai Babel, di sanalah kita duduk sambil menangis, apabila kita mengingat Sion.",
              "Pada pohon-pohon gandarusa di tempat itu kita menggantungkan kecapi kita.",
              "Sebab di sanalah orang-orang yang menawan kita meminta kepada kita memperdengarkan nyanyian, dan orang-orang yang menyiksa kita meminta nyanyian sukacita: \"Nyanyikanlah bagi kami nyanyian dari Sion!\"",
              "Bagaimanakah kita menyanyikan nyanyian Tuhan di negeri asing?",
              "Jika aku melupakan engkau, hai Yerusalem, biarlah menjadi kering tangan kananku!",
              "Biarlah lidahku melekat pada langit-langitku, jika aku tidak mengingat engkau, jika aku tidak jadikan Yerusalem puncak sukacitaku!",
              "Ingatlah, ya Tuhan, kepada bani Edom, yang pada hari pemusnahan Yerusalem mengatakan: \"Runtuhkan, runtuhkan sampai ke dasarnya!\"",
              "Hai puteri Babel, yang suka melakukan kekerasan, berbahagialah orang yang membalas kepadamu perbuatan-perbuatan yang kaulakukan kepada kami!",
              "Berbahagialah orang yang menangkap dan memecahkan anak-anakmu pada bukit batu! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 138 - Nyanyian syukur atas pertolongan Tuhan",
            text: [
              "Aku hendak bersyukur kepada-Mu dengan segenap hatiku, di hadapan para allah aku akan bermazmur bagi-Mu.",
              "Aku hendak sujud ke arah bait-Mu yang kudus dan memuji nama-Mu, oleh karena kasih-Mu dan oleh karena setia-Mu; sebab Kaubuat nama-Mu dan janji-Mu melebihi segala sesuatu.",
              "Pada hari aku berseru, Engkau pun menjawab aku, Engkau menambahkan kekuatan dalam jiwaku.",
              "Semua raja di bumi akan bersyukur kepada-Mu, ya Tuhan, sebab mereka mendengar janji dari mulut-Mu;",
              "mereka akan menyanyi tentang jalan-jalan Tuhan, sebab besar kemuliaan Tuhan.",
              "Tuhan itu tinggi, namun Ia melihat orang yang hina, dan mengenal orang yang sombong dari jauh.",
              "Jika aku berada dalam kesesakan, Engkau mempertahankan hidupku; terhadap amarah musuhku Engkau mengulurkan tangan-Mu, dan tangan kanan-Mu menyelamatkan aku.",
              "Tuhan akan menyelesaikannya bagiku! Ya Tuhan, kasih setia-Mu untuk selama-lamanya; janganlah Kautinggalkan perbuatan tangan-Mu! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 141 - Doa dalam pencobaan",
            text: [
              "Ya Tuhan, aku berseru kepada-Mu, datanglah segera kepadaku, berilah telinga kepada suaraku, waktu aku berseru kepada-Mu!",
              "Biarlah doaku adalah bagi-Mu seperti persembahan ukupan, dan tanganku yang terangkat seperti persembahan korban pada waktu petang.",
              "Awasilah mulutku, ya Tuhan, berjagalah pada pintu bibirku!",
              "Jangan condongkan hatiku kepada yang jahat, untuk melakukan perbuatan-perbuatan yang fasik bersama-sama dengan orang-orang yang melakukan kejahatan; dan jangan aku mengecap sedap-sedapan mereka.",
              "Biarlah orang benar memalu dan menghukum aku, itulah kasih; tetapi janganlah minyak orang fasik menghiasi kepalaku! Sungguh aku terus berdoa menentang kejahatan-kejahatan mereka.",
              "Apabila mereka diserahkan kepada hakim-hakimnya, maka mereka akan mendengar, bahwa perkataan-perkataanku menyenangkan.",
              "Seperti batu yang dibelah dan dihancurkan di tanah, demikianlah akan berhamburan tulang-tulang mereka di mulut dunia orang mati.",
              "Tetapi kepada-Mulah, ya Allah, Tuhanku, mataku tertuju; pada-Mulah aku berlindung, jangan campakkan aku!",
              "Lindungilah aku terhadap katupan jerat yang mereka pasang terhadap aku, dan dari perangkap orang-orang yang melakukan kejahatan.",
              "Orang-orang fasik akan jatuh serentak ke dalam jala mereka, tetapi aku melangkah lalu. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 142 - Doa seorang yang dikejar-kejar",
            text: [
              "Dengan nyaring aku berseru-seru kepada Tuhan, dengan nyaring aku memohon kepada Tuhan.",
              "Aku mencurahkan keluhanku ke hadapan-Nya, kesesakanku kuberitahukan ke hadapan-Nya.",
              "Ketika semangatku lemah lesu di dalam diriku, Engkaulah yang mengetahui jalanku. Di jalan yang harus kutempuh, dengan sembunyi mereka memasang jerat terhadap aku.",
              "Pandanglah ke kanan dan lihatlah, tidak ada seorang pun yang menghiraukan aku; tempat pelarian bagiku telah hilang, tidak ada seorang pun yang mencari aku.",
              "Aku berseru-seru kepada-Mu, ya Tuhan, kataku: \"Engkaulah tempat perlindunganku, bagianku di negeri orang-orang hidup!\"",
              "Perhatikanlah teriakku, sebab aku telah menjadi sangat lemah. Lepaskanlah aku dari pada orang-orang yang mengejar aku, sebab mereka terlalu kuat bagiku.",
              "Keluarkanlah aku dari dalam penjara untuk memuji nama-Mu. Orang-orang benar akan mengelilingi aku, apabila Engkau berbuat baik kepadaku. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 146 - Hanya Allah satu-satunya penolong",
            text: [
              "Pujilah Tuhan, hai jiwaku!",
              "Aku hendak memuliakan Tuhan selama aku hidup, dan bermazmur bagi Allahku selagi aku ada.",
              "Janganlah percaya kepada para bangsawan, kepada anak manusia yang tidak dapat memberikan keselamatan.",
              "Apabila nyawanya melayang, ia kembali ke tanah; pada hari itu juga lenyaplah maksud-maksudnya.",
              "Berbahagialah orang yang mempunyai Allah Yakub sebagai penolong, yang harapannya pada Tuhan, Allahnya:",
              "Dia yang menjadikan langit dan bumi, laut dan segala isinya; yang tetap setia untuk selama-lamanya,",
              "yang menegakkan keadilan untuk orang-orang yang diperas, yang memberi roti kepada orang-orang yang lapar. Tuhan membebaskan orang-orang yang terkurung,",
              "Tuhan membuka mata orang-orang buta, Tuhan menegakkan orang yang tertunduk, Tuhan mengasihi orang-orang benar.",
              "Tuhan menjaga orang-orang asing, anak yatim dan janda ditegakkan-Nya kembali, tetapi jalan orang fasik dibengkokkan-Nya.",
              "Tuhan itu Raja untuk selama-lamanya, Allahmu, ya Sion, turun-temurun! ALLELUIA."
            ]
          },
          {
            label: "Mazmur 147:1-11 - Kekuasaan dan kemurahan Tuhan",
            text: [
              "Sungguh, bermazmur bagi Allah kita itu baik, bahkan indah, dan layaklah memuji-muji itu.",
              "Tuhan membangun Yerusalem, Ia mengumpulkan orang-orang Israel yang tercerai-berai;",
              "Ia menyembuhkan orang-orang yang patah hati dan membalut luka-luka mereka;",
              "Ia menentukan jumlah bintang-bintang dan menyebut nama-nama semuanya.",
              "Besarlah Tuhan kita dan berlimpah kekuatan, kebijaksanaan-Nya tak terhingga.",
              "Tuhan menegakkan kembali orang-orang yang tertindas, tetapi merendahkan orang-orang fasik sampai ke bumi.",
              "Bernyanyilah bagi Tuhan dengan nyanyian syukur, bermazmurlah bagi Allah kita dengan kecapi!",
              "Dia, yang menutupi langit dengan awan-awan, yang menyediakan hujan bagi bumi, yang membuat gunung-gunung menumbuhkan rumput.",
              "Dia, yang memberi makanan kepada hewan, kepada anak-anak burung gagak, yang memanggil-manggil.",
              "Ia tidak suka kepada kegagahan kuda, Ia tidak senang kepada kaki laki-laki;",
              "Tuhan senang kepada orang-orang yang takut akan Dia, kepada orang-orang yang berharap akan kasih setia-Nya. ALLELUIA."
            ]
          },
          {
            label: "Mazmur 147:12-20 - Kekuasaan dan kemurahan Tuhan",
            text: [
              "Megahkanlah Tuhan, hai Yerusalem, pujilah Allahmu, hai Sion!",
              "Sebab Ia meneguhkan palang pintu gerbangmu, dan memberkati anak-anakmu di antaramu.",
              "Ia memberikan kesejahteraan kepada daerahmu dan mengenyangkan engkau dengan gandum yang terbaik.",
              "Ia menyampaikan perintah-Nya ke bumi; dengan segera firman-Nya berlari.",
              "Ia menurunkan salju seperti bulu domba dan menghamburkan embun beku seperti abu.",
              "Ia melemparkan air batu seperti pecahan-pecahan. Siapakah yang tahan berdiri menghadapi dingin-Nya?",
              "Ia menyampaikan firman-Nya, lalu mencairkan semuanya, Ia meniupkan angin-Nya, maka air mengalir.",
              "Ia memberitakan firman-Nya kepada Yakub, ketetapan-ketetapan-Nya and hukum-hukum-Nya kepada Israel.",
              "Ia tidak berbuat demikian kepada segala bangsa, dan hukum-hukum-Nya tidak mereka kenal. ALLELUIA."
            ]
          }
        ]
      },
      {
        title: "III. Injil Kudus",
        subTitle: "Lukas 2:25-32",
        parts: [
          {
            label: "Injil Lukas",
            text: [
              "Kudus, kudus, kudus. Pembacaan Injil Kudus menurut guru kita Santo Lukas. Kiranya berkat-berkatnya beserta kita semua. Amin.",
              "Adalah di Yerusalem seorang bernama Simeon. Ia seorang yang benar dan saleh yang menantikan penghiburan bagi Israel. Roh Kudus ada di atasnya, dan kepadanya telah dinyatakan oleh Roh Kudus, bahwa ia tidak akan mati sebelum ia melihat Mesias, yaitu Dia yang diurapi Tuhan.",
              "Ia datang ke Bait Allah oleh Roh Kudus. Ketika Yesus, Anak itu, dibawa masuk oleh orang tua-Nya untuk melakukan kepada-Nya apa yang ditentukan hukum Taurat, ia menyambut Anak itu dan menatang-Nya sambil memuji Allah, katanya:",
              "\”Sekarang, Tuhan, biarkanlah hamba-Mu ini pergi dalam damai sejahtera, sesuai dengan firman-Mu, 30sebab mataku telah melihat keselamatan yang dari pada-Mu, yang telah Engkau sediakan di hadapan segala bangsa, yaitu terang yang menjadi penyataan bagi bangsa-bangsa lain dan menjadi kemuliaan bagi umat-Mu, Israel.\”"
            ]
          },
          {
            label: "Kemuliaan kepada Allah selamanya. Amin.",
            text: [
              "Ten-oo aesh. tem-mok o pie-ekhr-iestos nem pe-kyot en agha-thos nem-pi epnevma etho-wab je a-ki ak-soati em-mon nai na-n.",
              "(Kami menyembah-Mu ya Kristus, bersama Bapa-Mu Yang Baik dan Roh Kudus, karena Engkau datang dan menyelamatkan kami, kasihanilah kami.)"
            ]
          }
        ]
      },
      {
        title: "IV. Litani Jam Keduabelas",
        subTitle: "Mengingat Pengadilan Kekal",
        parts: [
          {
            label: "Litani Pertama",
            text: [
              "Lihat, aku akan berdiri di depan Hakim dengan ketakutan karena dosaku yang banyak, karena hidup yang dihabiskan untuk kesenangan membawa penghukuman. Bertobatlah, wahai jiwaku, selama engkau masih berada di bumi; debu di kuburan tidak memberikan pujian, dan orang mati tidak dapat mengingat, tidak juga mereka yang berada di alam maut memberi Syukur.",
              "Bangkitlah dari kemalasanmu dan memohonlah dengan sangat kepada Juruselamat dengan hati yang bertobat, dan katakanlah, \"Tuhan Kasihanilah aku dan selamatkanlah aku.\"",
              "\"Doksa patri ke eiyo-ke-agi-yo pnevmaty\"",
              "(Kemuliaan kepada Bapa dan Putra dan Roh Kudus)"
            ]
          },
          {
            label: "Litani Kedua",
            text: [
              "Kalau hidup dan dunia ini kekal selamanya, wahai jiwaku, engkau mempunyai alasan yang sah, tetapi jika perbuatan jahatmu dan kejahatan yang menjijikan disingkap di hadapan Hakim yang Benar, Apakah jawabanmu, tidur selalu di pembaringan dosa dan selalu gagal menguasai tubuh.",
              "Ya Kristus, Allah kami, Aku takut berdiri di depan takhta Penghakiman-Mu, dan di depan Majelis penghakiman aku terpesona, dan di hadirat terang ketuhanan-Mu aku gemetar. Aku jahat dan tercemar, berbaring di atas tempat tidurku tidak peduli apapun. Tetapi aku meniru pemungut pajak, memukul dadaku dan berkata, \"Allah kasihanilah aku orang yang berdosa.\"",
              "\"Kenin kea-i ke-is-tos-e-on-as ton e-onon Amen.\"",
              "(Sekarang dan selama-lamanya. Amin.)"
            ]
          },
          {
            label: "Litani Ketiga",
            text: [
              "Ya, Perawan yang Suci, curahkanlah bayangan pertolonganmu pada hambamu. Buanglah dariku segala pikiran yang jahat dan bangkitkanlah jiwaku yang rapuh supaya tetap bangun dan berdoa, karena diriku sudah lama tertidur. Engkau sebagai Ibu, mampu, murah hati dan suka menolong. Bunda dari sumber kehidupan, Allah dan Rajaku, Yesus Kristus, Pengharapanku,"
            ]
          },
          {
            label: "Menurut Kemurahan-MU Ya TUHAN",
            text: [
              "Menurut kemurahan-Mu ya Tuhan, lindungilah kami pada malam ini dari dosa. Terpujilah Engkau, adalah Allah nenek moyang kami, nama-Mu Kudus penuh dengan kemuliaan selamanya. Amin.",
              "Biarkanlah kemurahan-Mu, ya Tuhan, beserta kami sebagaimana harap kami pada-Mu, karena semua mata memandang Engkau, sebab Engkau menyediakan makanan pada waktu yang tepat. Dengarlah kami, ya Tuhan dan Juruselamat kami, pengharapan dunia. Dan Engkau saja yang dapat melindungi dan menyelamatkan kami dari masa ini dan selamanya. Amin.",
              "Terpujilah Engkau, ya Tuhan, ajarkanlah aku ketetapan-Mu. Terpujilah Engkau, ya Tuhan; buatlah aku mengerti perintah-perintah-Mu. Terpujilah Engkau ya Tuhan, terangilah aku dengan kebenaran-Mu.",
              "Kasih setia-Mu ya Tuhan selamanya, janganlah Engkau merendahkan buatan tangan-Mu sendiri. Engkaulah tempat perlindunganku dari generasi kegenerasi. Aku memohon kepada Tuhan, \"Aku telah berdosa terhadap-Mu, kasihanilah aku dan selamatkanlah jiwaku.\" Tuhan, aku berlari pada-Mu, selamatkan aku dan ajarilah aku untuk melakukan kehendak-Mu, sebab Engkaulah Tuhanku, dan Engkaulah sumber kehidupan. Melalui terang-Mu kami melihat terang. Biarlah kemurahan-Mu datang kepada mereka yang mengenal Engkau dan kebenaran-Mu bagi mereka yang suci hatinya.",
              "Bagi Mulah berkat, pujian dan kemuliaan, ya Bapa dan Putra dan Roh Kudus yang telah ada pada permulaan, sekarang dan selamanya. Amin. Adalah baik untuk bersyukur kepada Tuhan dan memuji nama-Mu, Yang Mahatinggi, menyatakan kemurahan-Mu pada pagi hari dan kebenaran-Mu setiap malam."
            ]
          },
          { label: "Doa Kudus (Trisagion)", text: corePrayers.trisagion.text },
          {
            label: "Salam Bagimu",
            text: [
              "Salam bagimu, kami mohon kepadamu, ya Santa, penuh rahmat, perawan selamanya, Theotokos, Bunda Allah, Bunda Kristus, naikkan doamu kepada Anakmu yang kau cintai, kiranya Dia mengampuni dosa kami.",
              "Salam bagi Perawan Kudus yang telah memberikan kita Terang Sejati, Kristus Allah kami. Mohonlah kepada Tuhan demi kami, kiranya Ia mengasihani jiwa kami dan mengampuni dosa kami.",
              "Ya Perawan Maria, Theotokos, Bunda Allah, pembela manusia yang setia, syafaatkanlah kami di hadapan Kristus yang engkau lahirkan, kiranya Dia mengampuni dosa-dosa kami.",
              "Salam bagimu, ya Perawan dan Ratu yang benar, salam demi kebanggaan manusia, yang melahirkan Imanuel. Kami mohon ingatlah kami pembela yang setia, di hadapan Tuhan Yesus Kristus, kiranya Ia mengampuni dosa-dosa kami."
            ]
          },
          {
            label: "Pengantar Pengakuan Iman",
            text: [
              "Kami menghormatimu, Ibu dari Terang Sejati. Kami memuliakanmu, ya Santa, Theotokos, Bunda Allah, karena engkau telah melahirkan Juruselamat dunia yang datang dan menyelamatkan jiwa kami.",
              "Kemuliaan bagi-Mu, Tuan kami, Raja kami, Yesus Kristus, kebanggaan para rasul, mahkota kaum martir, kesukaan orang benar, keteguhan gereja, pengampunan akan dosa.",
              "Kami mewartakan Tritunggal Maha Kudus, Satu Allah. Kami menyembah Dia. Kami memuliakan Dia. Tuhan kasihanilah kami, Tuhan kasihanilah kami, Tuhan berkatilah kami. Amin."
            ]
          },
          {
            label: "Pengakuan Iman ORTODOKS",
            text: [
              "Kami percaya kepada Allah Yang Esa, Sang Bapa, Pantokrator (Yang Mahakuasa), Pencipta dari langit dan bumi, dan dari segala sesuatu yang kelihatan dan tidak kelihatan.",
              "Kami percaya kepada Tuhan yang Esa, Yesus Kristus Putra Allah yang tunggal, yang lahir dari Sang Bapa sebelum segala masa.",
              "Terang dari Terang, Allah sejati dari Allah sejati, dilahirkan bukan diciptakan, sehakikat dengan Sang Bapa, yang oleh-Nya segala sesuatu diciptakan.",
              "Dan demi kita manusia dan demi keselamatan kita, turun dari surga dan menjelma oleh Roh Kudus, dilahirkan oleh Perawan Maria dan menjadi manusia.",
              "Dan Ia disalibkan untuk kita pada zaman Pontius Pilatus, menderita sampai wafat dan dimakamkan, dan pada hari ketiga, Dia bangkit dari antara orang mati sesuai dengan Alkitab, lalu naik ke surga; duduk di sebelah kanan Bapa-Nya, dan Ia akan kembali dalam kemuliaan-Nya untuk mengadili orang yang hidup dan yang mati, dan Kerajaan-Nya kekal tidak berakhir.",
              "Ya, kami juga percaya kepada Roh Kudus, Tuhan yang menghidupkan, yang keluar dari Sang Bapa, dan bersama Sang Bapa dan Sang Putra disembah dan dimuliakan, yang bersabda melalui para nabi.",
              "Dan dalam gereja yang satu, kudus, katolik (universal) dan apostolik. Kami mengakui satu baptisan untuk pengampunan dosa.",
              "Kami menantikan kebangkitan orang mati dan kehidupan dimasa yang akan datang, Amin"
            ]
          },
          {
            label: "Kyrie Eleison",
            text: [
              "Ya Tuhan, dengarlah kami, kasihanilah kami, dan ampunilah dosa-dosa kami. Amin.",
              "Tuhan kasihanilah (Kyrie Eleison) 41 kali."
            ]
          }
        ]
      },
      {
        title: "V. DOA KUDUS",
        subTitle: "KUDUS, KUDUS, KUDUS Jam Keduabelas",
        parts: [
          {
            label: "KUDUS KUDUS KUDUS",
            text: [
              "Kudus, kudus, kuduslah Tuhan pemimpin pasukan malaikat, Sabaoth. Surga dan Bumi penuh dengan hormat dan kemuliaan-Mu. Kasihanilah kami, Ya Allah Bapa yang Maha Kuasa, Pantokrator.",
              "Ya Tritunggal Maha Kudus kasihanilah kami.",
              "Ya Tuhan, Allah pemimpin pasukan malaikat, sertailah kami. Karena kami tidak mempunyai penolong di dalam kesukaran dan kemalangan, tetapi hanya Engkau saja.",
              "Ya Allah bebaskan, ampuni dan hapuskanlah dosa-dosa yang telah kami perbuat secara sengaja dan tidak sengaja, sadar dan tidak-sadar, yang tersembunyi dan yang terlihat.",
              "Ya Tuhan ampunilah kami demi nama-Mu yang Kudus yang dipanggil atas kami, menurut belas kasihan-Mu dan bukan menurut dosa-dosa kami."
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      },
      {
        title: "V. Absolusi Jam Keduabelas",
        subTitle: "Doa Absolusi Istirahat Malam",
        parts: [
          {
            label: "Doa Absolusi",
            text: [
              "Tuhan, semua dosa yang telah kami perbuat terhadap Engkau pada hari ini, baik dalam perbuatan, perkataan, pikiran, atau panca indra kami, hapuskan dan ampunilah kami demi nama-Mu Yang Kudus, sebab Engkau baik dan Pengasih umat manusia.",
              "Allah, berilah kami malam yang damai dan tidur yang bebas dari segala ketegangan, kirimlah malaikat pembawa damai untuk melindungi kami dari yang jahat, pencobaan atau serangan musuh, lewat anugerah dan kasih dari Putra-Mu Yang Tunggal, Tuhan kami, Allah dan Juruselamat Yesus Kristus. Bersama Dia dan Roh Kudus yang memberi kehidupan, sama seperti Engkau layak menerima kemuliaan, hormat dan kuasa selama-lamanya. Amin."
            ]
          }
        ]
      },
      {
        title: "VI. Penutup Jam Keduabelas",
        subTitle: "Doa Penyerahan Diri",
        parts: [
          {
            label: "Doa Penutup",
            text: [
              "Kasihanilah kami, ya Allah, kasihanilah kami, Engkau yang setiap waktu dan saat selalu disembah dan dimuliakan di bumi dan di surga.",
              "Kristus, Tuhan kami yang baik, yang penuh kesabaran, yang melimpah dalam kemurahan, dan besar dalam belas kasihan; yang mencintai orang benar dan berbelas kasihan terhadap orang berdosa, terutama dirikulah yang paling berdosa. Engkau tidak menghendaki kematian orang berdosa, melainkan agar dia bertobat dan hidup, memanggil semua orang untuk diselamatkan, supaya mereka memperoleh janji akan hal-hal yang baik di masa yang akan datang.",
              "Tuhan, terimalah doa kami pada jam ini dan setiap waktu. Permudahlah hidup kami, dan tuntunlah kami untuk bertindak menurut perintah-Mu. Kuduskanlah jiwa kami. Bersihkanlah tubuh kami. Bimbinglah pikiran kami. Murnikanlah keinginan kami. Sembuhkanlah sakit kami. Ampunilah dosa-dosa kami. Lepaskanlah kami dari segala kesedihan dan penderitaan batin.",
              "Kelilingilah kami dengan malaikat-Mu yang kudus supaya kami dijaga dan dituntun oleh mereka, dan mencapai kesatuan iman dan pengetahuan mengenai kemuliaan-Mu yang tidak dapat dimengerti dan tanpa batas, karena Engkau mulia sampai selama-lamanya. Amin.",
              "(Lanjutkan dengan doa pribadi masing-masing dan diakhiri dengan Doa Bapa Kami)"
            ]
          },
          {
            label: "Layakkan kami untuk berdoa dengan penuh syukur",
            text: [
              "Bapa kami yang ada di surga,",
              "Dikuduskanlah nama-Mu, datanglah kerajaan-Mu,",
              "Jadilah kehendak-Mu di bumi seperti di surga.",
              "Berikanlah kami pada hari ini makanan kami yang secukupnya,",
              "Dan ampunilah kami akan kesalahan kami, seperti kami juga mengampuni orang yang bersalah kepada kami,",
              "Dan janganlah membawa kami ke dalam pencobaan, tetapi lepaskanlah kami dari yang jahat,",
              "Dalam Kristus Yesus Tuhan kami, karena Engkaulah yang empunya kerajaan, dan kuasa, dan kemuliaan sampai selama-lamanya. Amin."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "midnight",
    title: "Doa Tengah Malam",
    titleEn: "Midnight",
    timeText: "12:00 (Tengah Malam)",
    theme: "Penantian Mempelai Surga & Kedatangan Kedua Kali",
    description: "Merenungkan kedatangan Kristus kembali yang tak terduga (Matius 25: Perumpamaan gadis-gadis bijaksana). Terbagi dalam 3 Vigil (Giliran Jaga).",
    sections: [
      {
        title: "I. Pendahuluan (Pengantar Doa)",
        subTitle: "Ibadah Jaga Malam",
        parts: [
          { label: "Pembukaan Agpeya", text: corePrayers.tandaSalib.text },
          { label: "Bapa Kami Tengah Malam", text: corePrayers.doaTuhan.text },
          { label: "Doa Syukur Tengah Malam", text: corePrayers.doaSyukur.text },
          { label: "Mazmur 51", text: corePrayers.mazmur51.text }
        ]
      },
      {
        title: "II. Mazmur-Mazmur Agpeya",
        subTitle: "Mazmur Pujian Tengah Malam",
        parts: [
          {
            label: "Mazmur 133 - Kerukunan Saudara",
            text: [
              "Sungguh, alangkah baiknya dan indahnya, apabila saudara-saudara diam bersama dengan rukun!",
              "Seperti minyak yang baik di atas kepala meleleh ke janggut, ke janggut Harun yang meleleh ke leher jubahnya.",
              "Seperti embun gunung Hermon yang turun ke atas gunung-gunung Sion. Sebab ke sanalah TUHAN memerintahkan berkat, hidup untuk selama-lamanya."
            ]
          },
          {
            label: "Mazmur 118 (Potongan) - Taurat yang Kudus",
            text: [
              "Berbahagialah orang-orang yang hidupnya tidak bercela, yang hidup menurut taurat TUHAN.",
              "Berbahagialah orang-orang yang memegang peringatan-peringatan-Nya, yang mencari Dia dengan segenap hati.",
              "Sekiranya hidupku tentu untuk berpegang pada ketetapan-Mu!",
              "Maka aku tidak akan mendapat malu, apabila aku mengamat-amati segala perintah-Mu.",
              "Aku mau bersyukur kepada-Mu dengan jujur batin, apabila aku belajar hukum-hukum-Mu yang adil.",
              "Aku mau berpegang pada ketetapan-ketetapan-Mu, janganlah tinggalkan aku sama sekali.",
              "Dengan apakah seorang muda mempertahankan kelakuannya bersih? Dengan menjaganya sesuai dengan firman-Mu.",
              "Dengan segenap hatiku aku mencari Engkau, janganlah biarkan aku menyimpang dari perintah-perintah-Mu.",
              "Dalam hatiku aku menyimpan janji-Mu, supaya aku jangan berdosa terhadap Engkau.",
              "Terpujilah Engkau, ya TUHAN; ajarkanlah ketetapan-ketetapan-Mu kepadaku."
            ]
          }
        ]
      },
      {
        title: "III. Injil Kudus (Vigil Pertama / Kesiapan)",
        subTitle: "Matius 25:1-13 (Sepuluh Gadis Bijaksana)",
        parts: [
          {
            label: "Injil Matius",
            text: [
              "\"Pada waktu itu hal Kerajaan Sorga seumpama sepuluh gadis, yang mengambil pelitanya dan pergi menyongsong mempelai laki-laki.\"",
              "\"Lima di antaranya bodoh dan lima bijaksana.\"",
              "\"Gadis-gadis yang bodoh itu membawa pelitanya, tetapi tidak membawa minyak,\"",
              "\"Sedangkan gadis-gadis yang bijaksana itu membawa pelitanya dan juga minyak dalam buli-buli mereka.\"",
              "\"Tetapi pada tengah malam terdengarlah suara berseru: Mempelai datang! Songsonglah dia!\""
            ]
          }
        ]
      },
      {
        title: "IV. Litani Jaga Malam",
        subTitle: "Panggilan Jiwa Tengah Malam",
        parts: [
          {
            label: "Litani Pertama Tengah Malam",
            text: [
              "Lihatlah, Mempelai Pria datang di tengah malam, berbahagialah hamba yang didapati-Nya sedang berjaga.",
              "Tetapi celakalah hamba yang didapati-Nya sedang tertidur pulas.",
              "Waspadalah, hai jiwaku, agar engkau tidak tertidur dan terbuang ke luar tanpa pelita menyala."
            ]
          }
        ]
      },
      {
        title: "V. Absolusi Tengah Malam",
        subTitle: "Doa Absolusi Jaga Malam",
        parts: [
          {
            label: "Doa Absolusi",
            text: [
              "Ya Tuhan YESUS Kristus, Gembala Agung kami yang menatap kami dari arasy suci-Mu.",
              "Berilah kami roh kebijaksanaan untuk selalu berjaga-jaga demi menyambut hari kedatangan-Mu yang mulia. Amin."
            ]
          }
        ]
      },
      {
        title: "VI. Penutup Tengah Malam",
        subTitle: "Selesai Sembahyang Malam",
        parts: [
          { label: "Doa Penutup Midnight", text: ["Heningkan cipta sejenak merasakan kebersamaan dengan Allah, lalu doakan Bapa Kami."] }
        ]
      }
    ]
  },
  {
    id: "veil",
    title: "Doa Tirai (Veil)",
    titleEn: "Veil",
    timeText: "Khusus Biarawan/Klerus",
    theme: "Retret Rohani dan Perlindungan Ilahi",
    description: "Ibadah khusus untuk para klerus, biarawan, dan pelayan liturgis. Merenungkan ketidakpurnaan pelayanan keduniawian dan perlindungan total di balik Tirai Bait Allah.",
    sections: [
      {
        title: "I. Pendahuluan Doa Tirai",
        subTitle: "Doa Awal Klerus",
        parts: [
          { label: "Tanda Salib", text: corePrayers.tandaSalib.text },
          { label: "Doa Terima Kasih", text: corePrayers.doaSyukur.text },
          { label: "Mazmur 51 (Pertobatan)", text: corePrayers.mazmur51.text }
        ]
      },
      {
        title: "II. Mazmur Pilihan Tirai",
        subTitle: "Merenung di Balik Selubung",
        parts: [
          {
            label: "Mazmur 4 - Doa Malam Hari",
            text: [
              "Apabila aku berseru, jawablah aku, ya Allah yang membenarkan aku! Di dalam kesesakan Engkau memberi kelegaan kepadaku. Kasihanilah aku dan dengarkanlah doaku!",
              "Banyak orang berkata: ”Siapa yang akan memperlihatkan yang baik kepada kita?” Biarlah cahaya wajah-Mu menyinari kami, ya TUHAN!",
              "Engkau telah memberikan sukacita kepada hatiku, lebih banyak dari pada mereka pada masa gandum dan anggur mereka berlimpah-limpah.",
              "Dengan tenteram aku mau membaringkan diri, lalu segera tidur, sebab hanya Engkaulah, ya TUHAN, yang membiarkan aku diam dengan aman."
            ]
          }
        ]
      },
      {
        title: "III. Injil Kudus",
        subTitle: "Yohanes 1:18-34",
        parts: [
          {
            label: "Yohanes Pembaptis bersaksi",
            text: [
              "Tidak seorang pun yang pernah melihat Allah; tetapi Anak Tunggal Allah, yang ada di pangkuan Bapa, Dialah yang menyatakan-Nya.",
              "Dan inilah kesaksian Yohanes ketika orang Yahudi dari Yerusalem mengutus kepadanya beberapa imam dan orang-orang Lewi..."
            ]
          }
        ]
      },
      {
        title: "IV. Litani Doa Tirai",
        subTitle: "Pertanggungjawaban Pelayanan",
        parts: [
          {
            label: "Litani Komitmen",
            text: [
              "Ya Tuhan Yesus, bimbinglah kami sebagai pelayan altar-Mu yang kudus.",
              "Selubungilah kami dengan jubah kebenaran-Mu agar pelayanan kami murni di hadapan para malaikat-Mu."
            ]
          }
        ]
      },
      {
        title: "V. Absolusi Doa Tirai",
        subTitle: "Penghapusan Dosa Pelayan",
        parts: [
          {
            label: "Doa Absolusi Khusus",
            text: [
              "Ya Tuhan yang mengetahui segala rahasia hati manusia, bersihkanlah hati para pelayan altar dan klerus-Mu.",
              "Kuduskanlah kami agar layak mempersembahkan korban pujian rohani ini bagi-Mu. Amin."
            ]
          }
        ]
      },
      {
        title: "VI. Penutup",
        subTitle: "Doa Akhir",
        parts: [
          { label: "Doa Kebaktian Selesai", text: ["Ucapkan Bapa Kami serta bersujud syukuran."] }
        ]
      }
    ]
  }
];

export const otherPrayersData = [
  {
    title: "Doa Sebelum Makan (Doa Meja)",
    text: [
      "Terpujilah Engkau, ya Tuhan, yang menopang kami sejak masa muda kami, yang menganugerahkan berkat-berkat-Mu kepada kami, dan menyediakan makanan bagi setiap makhluk; karena mata semua orang menantikan Engkau, ya Tuhan, dan Engkau pun memberi mereka makanan pada waktunya.",
      "Engkau membuka tangan-Mu, dan memuaskan segala yang hidup.",
      "Berkatilah makan dan minum kami ini, ya Tuhan Yesus Kristus Allah kami, sucikanlah makanan jasmani ini agar memberi kesehatan jasmani dan kekuatan untuk melayani-Mu. Dalam nama Tuhan yesus kristus Juruselamat kami. Amin."
    ]
  },
  {
    title: "Doa Setelah Makan",
    text: [
      "Kami mengucap syukur kepada-Mu, ya Tuhan yang kudus, atas kemurahan-Mu mengisi tubuh kami dengan buah-buah bumi ini.",
      "Sama seperti Engkau telah memuaskan tubuh jasmani kami dengan makanan duniawi ini dan memuaskan kebutuhan hidup kami sehari-hari, puaskanlah pula jiwa jiwa dan roh kami dengan Roh Kudus-Mu yang menghidupkan.",
      "Biarlah kami senantiasa kenyang akan firman-Mu dan haus akan kebenaran-Mu. Dan kiranya kami semua didapati layak untuk kelak duduk bersama dalam perjamuan surgawi-Mu yang abadi di Kerajaan Surga. Dalam nama Tuhan yesus kristus Juruselamat kami. Amin."
    ]
  },
  {
    title: "Doa Sebelum Penerimaan Komuni (Ekaristi)",
    text: [
      "Dalam nama Bapa, dan Putra, dan Roh Kudus, Allah Yang Esa. Amin.",
      "Tuhan, aku tidak layak Engkau kunjungi, karena aku orang yang berdosa, tetapi berkatalah saja maka jiwaku akan disembuhkan. Katakanlah padaku: Dosamu sudah diampuni.",
      "Aku hampa dan kosong dari segala kebaikan, aku tidak memiliki apa-apa, kecuali hanya memiliki belas kasihan-Mu, kemurahan-Mu, dan kasih-Mu kepada manusia.",
      "Engkau telah turun dari kemuliaan Surga kepada kami dalam kesederhanaan, dan rela dilahirkan di dalam palungan.",
      "Ya Juruselamat yang kudus, janganlah menolak jiwaku yang hina dan yang menyedihkan, yang menunggu kedatangan-Mu yang mulia.",
      "Seperti Engkau tidak menolak untuk masuk ke dalam rumah orang yang menderita kusta dan menyembuhkan dia, ya Tuhan, datanglah, masuklah dalam jiwaku dan sucikanlah. Sebagaimana Engkau tidak melarang perempuan yang berdosa mencium kaki-Mu, janganlah kiranya Engkau mencegah diriku untuk menerima Tubuh-Mu yang Kudus dan Darah-Mu yang Suci.",
      "Kiranya Komuni Kudus ini menghapuskan kekotoranku dan mematikan semua keinginanku yang jahat. Tolonglah aku menaati perintah-Mu yang memberi hidup untuk pemurnian jiwa dan tubuhku dari setiap dosa, dan agar layak menerima karunia dan berkat-berkat-Mu. Kiranya Roh-Mu tinggal didalamku dan menyatukan aku dengan Engkau sehingga aku dapat hidup untuk kemuliaan Nama-Mu. Amin."
    ]
  },
  {
    title: "Doa Sesudah Komuni Kudus",
    text: [
      "Dalam nama Bapa, dan Putra, dan Roh Kudus, Allah Yang Esa. Amin.",
      "Hatiku penuh sukacita dan lidahku bersukaria. Jiwaku memuliakan Tuhan dan rohku bergembira dalam Allah Penyelamatku. Aku telah datang pada-Mu, ya Tuhan, Engkau mendandani aku dengan jubah yang bersinar dan melayakkanku masuk dalam pesta pernikahan-Mu. Kiranya persatuan dengan-Mu pada hari ini adalah selamanya, sebab melalui ini aku bertumbuh dalam kebajikan, menguatkan iman dan pengharapanku.",
      "Biarlah Komuni Kudus ini menjadi suatu tanda dari keselamatan-Mu, jubah anugerah, jubah kelahiran baru, kemurnian dan kebenaran bagi tubuh dan jiwaku dan persiapan untuk kasih dan sukacita yang kekal. Aku menyerahkan diriku dan kehendakku kepada belas kasihan-Mu, ya Tuhan dan panca inderaku, pikiranku, berkatilah dan jadikanlah semua itu sesuai dengan kehendak-Mu.",
      "Terangilah hatiku dan bangunkanlah nuraniku. Buanglah segala bayangan yang jahat, tenangkanlah badai, jalanlah bersama aku dan tuntunlah aku. Berikanlah diriku rasa nyaman, puaskanlah dahagaku, dan pandanglah segala kekuranganku dengan kasih, tinggallah bersamaku karena hari segera berakhir dan tinggallah bersamaku hingga hari yang baru. Hanya Engkaulah tujuanku dan kebahagiaanku, sekarang dan selamanya. Amin."
    ]
  },
  {
    title: "Doa Penyesalan dan Pengakuan Dosa",
    text: [
      "Dalam nama Bapa, dan Putra, dan Roh Kudus, Allah Yang Esa. Amin.",
      "Ya Tuhan, Yesus Kristus, Allah dan Juruselamatku, Engkau yang berlimpah kasih setia dan lambat untuk marah. Aku datang ke hadapan-Mu dengan hati yang hancur dan penuh sesal. Aku mengakui bahwa aku telah berdosa terhadap surga dan di hadapan-Mu, dan aku tidak layak lagi disebut sebagai anak-Mu.",
      "Aku telah menyia-nyiakan jubah pembaptisanku yang suci dengan pikiran yang kotor, perkataan yang sia-sia, dan perbuatan-perbuatan yang melanggar hukum-Mu. Pikiran hatiku terus-menerus cenderung pada kejahatan, dan aku telah berulang kali mendukakan Roh Kudus-Mu.",
      "Namun, ya Tuhan, Engkau tidak menghendaki kematian orang berdosa, melainkan agar ia bertobat dan hidup. Janganlah buang aku dari hadapan-Mu karena kebebalanku. Terimalah aku kembali seperti Engkau menerima anak yang hilang yang berjalan pulang, seperti Engkau mengampuni perempuan pezina, dan seperti Engkau membukakan pintu firdaus bagi penyamun yang bertobat di kayu salib.",
      "Bersihkanlah aku seluruhnya dari kesalahanku dan tahirkanlah aku dari dosaku. Ciptakanlah hati yang murni di dalam diriku, ya Allah, dan perbaharuilah batinku dengan roh yang teguh, agar aku memiliki kekuatan untuk melawan tipu daya musuh dan hidup demi kemuliaan-Mu yang kudus. Dalam nama Tuhan Yesus Kristus Juruselamatku. Amin."
    ]
  },
  {
    title: "Doa Tuntunan TUHAN Sebelum Mengambil Keputusan",
    text: [
      "Dalam nama Bapa, dan Putra, dan Roh Kudus, Allah Yang Esa. Amin.",
      "Ya Tuhan Allah Bapa didalam sorga, Engkau tahu apa yang tidak baik bagiku, dan sekarang aku akan memulai ........... (sebutkan)...........",
      "Bagaimana aku dapat mengerti bahwa inilah yang benar, kecuali Engkau menuntun aku dengan anugerah-Mu. Ya Tuhan, aku mencari tuntunan-Mu untuk perkara ini, janganlah aku menurut kecenderungan hatiku sendiri, karena akan menjadi kacau dan gagal. Jagalah aku dari kejatuhan, tolonglah aku, biarlah menurut kehendak-Mu. Apabila Engkau memandang patut, berikanlah aku berkat-Mu untuk menyelesaikannya, bila tidak, hilangkanlah kehendak ini dari hatiku. Engkau mengetahui segala hal, tiada yang tersembunyi dari pada-Mu.",
      "Tuhan akulah hamba-Mu, perlakukanlah aku menurut pandangan-Mu, karena aku sadar, bahwa aku tidak akan berhasil atau mendapatkan damai, sampai aku menundukkan diri kepada anugerah kehendak-Mu. Ajarlah aku setiap waktu; Bapa, bukan menurut kehendakku, melainkan menurut kehendak-Mu.",
      "Karena Engkaulah yang empunya Kerajaan, Kuasa dan Kemuliaan selama-lamanya. Dalam nama Tuhan Yesus Kristus Juruselamatku. Amin."
    ]
  }
];
