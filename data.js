const locations = [
[
    "2009/08/16",
    "07:38:22.867 UTC",
    "1.55 S",
    "99.41 E",
    "13 Km",
    "6.8",
    "Berpotensi Tsunami",
    "-1.55 99.41",
    "unset",
    "Southern of Sumatra, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.8 dengan kedalaman dangkal 13 Km dapat berpotensi Tsunami. Tsunami terdeteksi di daerah Padang, Pekanbaru, Sibolga, Padangpanjang, Painan, Payakumbuh, Gunungsitoli Nias",
    ],
    [
    "2010/04/06",
    "22:15:03.209 UTC",
    "2.24 N",
    "97.11 E",
    "29 Km",
    "7.7",
    "Berpotensi Tsunami",
    "2.24 97.11",
    "unset",
    "Northern of Sumatra, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 7.7 dengan kedalaman dangkal 29 Km dapat berpotensi Tsunami. Tsunami terdeteksi di Kab. Simeuleu, Kab. Aceh Singkil, dan Kab. Subulussalam menyebabkan bangunan dan infrastruktur rusak",
    ],
    [
    "2015/03/03",
    "10:37:32.829 UTC",
    "0.74 S",
    "98.77 E",
    "47 Km",
    "6.1",
    "Berpotensi Tsunami",
    "-0.74 98.77",
    "unset",
    "Southern Sumatera, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.1 dengan kedalaman dangkal yaitu 47 Km dapat berpotensi tsunami",
    ],
    [
    "2016/03/02",
    "12:49:47.458 UTC",
    "4.92 S",
    "94.31 E",
    "19 Km",
    "7.7",
    "Berpotensi Tsunami",
    "-4.92 94.31",
    "unset",
    "Southwest of Sumatra, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 7.7 dengan kedalaman dangkal 19 Km dapat berpotensi Tsunami. Tsunami kecil terdeteksi di Pulau Cocos setinggi 10 cm dan di Padang setinggi 5 cm",
    ], 
    [
    "2016/12/06",
    "22:03:34.280 UTC",
    "5.27 N",
    "96.23 E",
    "12 Km",
    "6.5",
    "Berpotensi Tsunami",
    "5.27 96.23",
    "unset",
    "Northern of Sumatera, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.5 dengan kedalaman dangkal yaitu 12 Km dapat berpotensi tsunami",
    ],
    [
    "2017/08/13",
    "03:08:13.468 UTC",
    "3.68 S",
    "101.70 E",
    "58 Km",
    "6.4",
    "Berpotensi Tsunami",
    "-3.68 101.70",
    "unset",
    "Southern Sumatera, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan magnitudo M 6.4 dengan kedalaman dangkal yaitu 58 Km dapat berpotensi tsunami",
    ],
    [
    "2018/02/14",
    "06:56:38,252 UTC",
    "9.45 S",
    "99.06 E",
    "218 Km",
    "6.1",
    "Tidak Berpotensi Tsunami",
    "-9.45 99.06",
    "unset",
    "Southwest of Sumatera, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    ],
    [
    "2019/08/02",
    "12:03:26.642 UTC",
    "7.27 S",
    "104.79 E",
    "55 Km",
    "6.9",
    "Berpotensi Tsunami",
    "-7.27 104.79",
    "unset",
    "Southwest of Sumatera, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.9 dengan kedalaman dangkal yaitu 55 Km dapat berpotensi tsunami",
    ],
    [
    "2020/08/18",
    "22:29:23.567 UTC",
    "4.45 S",
    "100.97 E",
    "23 Km",
    "7.1",
    "Berpotensi Tsunami",
    "-4.45 100.97",
    "unset",
    "Southwest of Sumatera, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 7.1 dengan kedalaman dangkal yaitu 23 Km dapat berpotensi tsunami",
    ],
    // Sulawesi
    [
    "2016/01/11",
        "16:38:11.078 UTC",
        "3.78 S",
        "126.88 E",
        "61 Km",
        "6.4",
        "Berpotensi Tsunami",
        "3.78 126.88",
        "Unset",
        "Talaud Islands, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.4 dengan kedalaman dangkal yaitu 61 Km berpotensi tsunami "
    ],
    [
    "2017/05/29",
        "14:35:23.343 UTC",
        "1.29 S",
        "120.44 E",
        "11 Km",
        "6.6",
        "Berpotensi Tsunami",
        "-1.29 120.44",
        "Unset",
        "Sulawesi, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.6 dengan kedalaman dangkal yaitu 11 Km berpotensi tsunami "
    ],
    [
    "2018/09/28",
    "10:02:43.674 UTC",
    "0,22 S",
    "119,85 E",
    "10 Km",
    "7.5",
    "Berpotensi Tsunami",
    "-0.22 119.85",
    "unset",
    "Minahassa Peninsula, Sulawesi, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 7.5 dengan kedalaman dangkal yaitu 47 Km dapat berpotensi Tsunami. Tsunami menimpa korban 2.037 korban jiwa dan kerusakan bangunan serta infrastruktur pada daerah Donggala, Palu, dan Sigi",
    ],
    [
    "2019/04/13",
        "11:40:49.826 UTC",
        "1.89 S",
        "122.53 E",
        "10 Km",
        "6.9",
        "Berpotensi Tsunami",
        "1.89 122.53",
        "unset",
        "Sulawesi, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.9 dengan kedalaman 10 Km berpotensi tsunami "
    ],
    
    [
    "2020/06/23",
        "07:43:29.104 UTC",
        "0.08 N",
        "123.85 E",
        "106 Km",
        "6.1",
        "Berpotensi Tsunami",
        "0.08 123.85",
        "Unset",
        "Minahassa Peninsula, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.1 dengan kedalaman 106 Km berpotensi tsunami "
    ],
    [	"2016/10/19", 
        "00:26:00.311 UTC",
            "4.98 S",
            "108.16 E",
        "614 Km",
        "6.3",
         "Berpotensi Tsunami",
        "-4.98 108.16",
        "unset ",
        "Java Sea",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.3 dengan kedalaman 614 Km ini berpotensi Tsunami",
    ],
    [	"2017/12/15", 
        "16:47:58.325 UTC",
            "7.73 S",
            "108.10 E",
        "115 Km",
        "6.5 ",
         "Berpotensi Tsunami",
        "-7.73 108.10",
        "unset ",
        "Java, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.5 dengan kedalaman 115 Km ini berpotensi Tsunami",
    ],
    [	"2018/01/23", 
        "06:34:54.390 UTC",
            "7.13 S",
            "106.04 E ",
        "46 Km",
        "6.1",
         "Berpotensi Tsunami",
        "-7.13 106.04",
        "unset ",
        "Java, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.1 dengan kedalaman 46 Km ini berpotensi Tsunami",
    ],
    [	"2019/09/19", 
        "07:06:33.660 UTC ",
            "6.10 S",
            "111.84 E",
        "621 Km",
        "6.1",
         "Berpotensi Tsunami",
        "-6.10 111.84 ",
        "unset ",
        "Java, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.1 dengan kedalaman 621 Km ini berpotensi Tsunami",
    ],
    [	"2020/02/05", 
        "18:12:35.205 UTC",
            "6.56 S ",
            "113.05 E",
        "641 Km",
        "6.2",
         "Berpotensi Tsunami",
        "-6.56 113.05 ",
        "unset ",
        "Java, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.2 dengan kedalaman 641 Km ini berpotensi Tsunami",
    ],
    [	"2020/07/06", 
        "22:54:46.995 UTC",
            "5.73 S",
            "110.63 E",
        "537 Km",
        "6.1",
         "Berpotensi Tsunami",
        "-5.73 110.63",
        "unset ",
        "Java Sea",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.1 dengan kedalaman 537 Km ini berpotensi Tsunami",
    ],
    [	"2020/02/05", 
        "18:12:35.205 UTC",
            "6.56 S",
            "113.05 E ",
        "641 Km",
        "6.2",
         "Berpotensi Tsunami",
        "-6.56 113.05",
        "unset ",
        "Java, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.2 dengan kedalaman 641 Km ini berpotensi Tsunami",
    ],
    [
    "2009/01/03",  
    "19:43:54.962 UTC",  
    "0.54 S",  
    "132.89 E",  
    "17 Km",
    "7.9",   
    "Berpotensi Tsunami", 
    "-0.54 132.89",
    "unset",
    "Irian Jaya Region, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 7.9 dengan kedalaman dangkal 17 Km berpotensi tsunami. Tsunami melanda daerah Manokwari, Sorong, Nabire, Ransiki, dan Ambon yang menimpa korban jiwa serta kerusakan bangunan",
    ],
    [
    "2015/07/27",  
    "21:41:21.882 UTC",  
    "2.75 S",  
    "138.55 E",  
    "51 Km",
    "6.9",   
    "Berpotensi Tsunami",
    "-2.75 138.55",
    "Unset",
    "Irian Jaya, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.9 dengan kedalaman 51 Km berpotensi tsunami ",
    ],
    [
    "2015/12/09",  
    "10:21:51.450 UTC",   
    "4.05 S",  
    "129.55 E",  
    "57 Km",
    "6.8",   
    "Berpotensi Tsunami",
    "-4.05 129.55",
    "Unset", 
    "Banda Sea",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.8 dengan kedalaman 57 Km berpotensi tsunami ",
    ],
    [
    "2020/01/18",  
    "16:38:13.990 UTC",  
    "2.83 S",  
    "139.46 E",  
    "51 Km",
    "6.0",   
    "Berpotensi Tsunami", 
    "-2.83 139.46",
    "Unset",
    "Near North Coast of Irian Jaya",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.0 dengan kedalaman 51 Km berpotensi tsunami ",
    ],
    [
    "2020/05/06",  
    "13:53:57.225 UTC",   
    "6.92 S",  
    "129.89 E", 
    "132 Km",
    "6.9",   
    "Berpotensi Tsunami", 
    "-6.92 129.89",
    "Unset",
    "Banda Sea",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.9 dengan kedalaman 132 Km berpotensi tsunami ",
    ],
    [
    "2015/03/17",  
    "22:12:30.292 UTC",   
    "1.72 N",  
    "126.51 E",  
    "64 Km",
    "6.2",   
    "Berpotensi Tsunami", 
    "1.72 126.51", 
    "Unset", 
    "Northern Molucca Sea",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.2 dengan kedalaman 64 Km berpotensi tsunami ",
    ],
    [
    "2017/10/24",  
    "10:47:46.877 UTC",
    "7.30 S",  
    "123.04 E", 
    "552 Km",
    "6.7",   
    "Berpotensi Tsunami",
    "-7.30 123.04",
    "Unset", 
    "Banda Sea",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.7 dengan kedalaman 552 Km berpotensi tsunami ",
    ],
    [
    "2018/03/25",  
    "20:14:47.496 UTC",   
    "6.73 S",  
    "129.73 E", 
    "172 Km",
    "6.8",
    "Berpotensi Tsunami", 
    "-6.73 129.73", 
    "Unset",
    "Banda Sea",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.8 dengan kedalaman 172 Km berpotensi tsunami ",
    ],
    [
    "2019/04/06",  
    "11:55:01.794 UTC",  
    "6.94 N",  
    "1225.01 E", 
    "547 Km",
    "6.3",   
    "Berpotensi Tsunami", 
    "-6.94 125.01",
    "unset",
    "Banda Sea, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.3 dengan kedalaman 547 Km berpotensi tsunami ",
    ],
    [
    "2020/06/04",  
    "08:49:40.617 UTC",  
    "2.92 N",  
    "128.21 E", 
    "117 Km",
    "6.4",   
    "Berpotensi Tsunami", 
    "2.92 128.21",
    "Unset",
    "Halmahera, Indonesia",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.4 dengan kedalaman 117 Km berpotensi tsunami ",
    ],
    [
    "2020/08/21",  
    "04:09:50.927",   
    "6.84 S",  
    "123.48 E", 
    "663 Km",
    "6.7",   
    "Berpotensi Tsunami",
    "-6.84 123.48",
    "Unset", 
    "Banda Sea",
    "http://repogempa.bmkg.go.id/repo_new/",
    "Catatan : Gempa dengan M 6.7 dengan kedalaman 663 Km berpotensi tsunami ",
    ],
    [	"2020/05/06", 
        "13:53:57.225 UTC",
            "6.92 S",
            "129.89 E ",
        "132 Km",
        "6.9",
         "Berpotensi Tsunami",
        "-6.92 129.89",
        "unset ",
        "Banda Sea, Indonesia",
        "http://repogempa.bmkg.go.id/repo_new/",
        "Catatan : Gempa dengan M 6.9 dengan kedalaman 132 Km ini berpotensi Tsunami",
    ],
]    