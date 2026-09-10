function bukaMateri() {
    document.getElementById("materi").innerHTML = `
        <h2>📚 Materi Pelajaran</h2>

        <button onclick="pilihMapel('Matematika')">
            🔢 Matematika
        </button>

        <button onclick="pilihMapel('IPA')">
            🔬 IPA
        </button>

        <button onclick="pilihMapel('Bahasa Indonesia')">
            📖 Bahasa Indonesia
        </button>

        <button onclick="pilihMapel('Bahasa Inggris')">
            🇬🇧 Bahasa Inggris
        </button>
    `;
}


function pilihMapel(nama) {

    if (nama === "Matematika") {
        document.getElementById("materi").innerHTML = `
            <h2>🔢 Matematika</h2>

            <h3>Bilangan Berpangkat</h3>
            <p>
                Bilangan berpangkat adalah perkalian berulang
                dari suatu bilangan.
            </p>

            <p><b>Contoh:</b> 2³ = 2 × 2 × 2 = 8</p>

            <button onclick="bukaMateri()">⬅️ Kembali</button>
        `;
    }

    if (nama === "IPA") {
        document.getElementById("materi").innerHTML = `
            <h2>🔬 IPA</h2>

            <h3>Sistem Pernapasan</h3>
            <p>
                Sistem pernapasan digunakan untuk mengambil
                oksigen dan mengeluarkan karbon dioksida.
            </p>

            <p><b>Organ utama:</b> hidung, tenggorokan, dan paru-paru.</p>

            <button onclick="bukaMateri()">⬅️ Kembali</button>
        `;
    }

    if (nama === "Bahasa Indonesia") {
        document.getElementById("materi").innerHTML = `
            <h2>📖 Bahasa Indonesia</h2>

            <h3>Teks Deskripsi</h3>
            <p>
                Teks deskripsi adalah teks yang menggambarkan
                suatu objek secara jelas dan terperinci.
            </p>

            <button onclick="bukaMateri()">⬅️ Kembali</button>
        `;
    }

    if (nama === "Bahasa Inggris") {
        document.getElementById("materi").innerHTML = `
            <h2>🇬🇧 Bahasa Inggris</h2>

            <h3>Simple Present Tense</h3>
            <p>
                Simple Present Tense digunakan untuk menyatakan
                kebiasaan atau fakta.
            </p>

            <p><b>Contoh:</b> I study every day.</p>

            <button onclick="bukaMateri()">⬅️ Kembali</button>
        `;
    }
}
let nomorSoal = 0;
let skor = 0;

const soal = [
    {
        pertanyaan: "Berapakah 5 + 5?",
        pilihan: ["8", "10", "12", "15"],
        benar: 1
    },
    {
        pertanyaan: "Hasil dari 3 × 4 adalah?",
        pilihan: ["7", "10", "12", "14"],
        benar: 2
    },
    {
        pertanyaan: "Planet yang kita tinggali adalah?",
        pilihan: ["Mars", "Venus", "Bumi", "Jupiter"],
        benar: 2
    },
    {
        pertanyaan: "Bahasa resmi Indonesia adalah?",
        pilihan: ["Bahasa Inggris", "Bahasa Indonesia", "Bahasa Jepang", "Bahasa Mandarin"],
        benar: 1
    },
    {
        pertanyaan: "Bahasa Inggris dari 'buku' adalah?",
        pilihan: ["Pen", "Table", "Book", "Bag"],
        benar: 2
    }
];

function bukaLatihan() {
    nomorSoal = 0;
    skor = 0;
    tampilkanSoal();
}

function tampilkanSoal() {

    if (nomorSoal >= soal.length) {
        let nilai = skor * 20;

        document.getElementById("materi").innerHTML = `
            <h2>🎉 Latihan Selesai!</h2>
            <h3>Nilai kamu: ${nilai}</h3>
            <p>Jawaban benar: ${skor} dari ${soal.length}</p>

            <button onclick="bukaLatihan()">
                🔄 Coba Lagi
            </button>
        `;
        return;
    }

    let s = soal[nomorSoal];

    document.getElementById("materi").innerHTML = `
        <h2>📝 Latihan Soal</h2>

        <p>Soal ${nomorSoal + 1} dari ${soal.length}</p>

        <h3>${s.pertanyaan}</h3>

        <button onclick="jawab(${s.benar}, 0)">
            A. ${s.pilihan[0]}
        </button>

        <button onclick="jawab(${s.benar}, 1)">
            B. ${s.pilihan[1]}
        </button>

        <button onclick="jawab(${s.benar}, 2)">
            C. ${s.pilihan[2]}
        </button>

        <button onclick="jawab(${s.benar}, 3)">
            D. ${s.pilihan[3]}
        </button>
    `;
}

function jawab(jawabanBenar, jawabanDipilih) {

    if (jawabanBenar === jawabanDipilih) {
        skor++;
    }

    nomorSoal++;
    tampilkanSoal();
}
    if (nomor === 1 && jawaban === "B") {
        document.getElementById("hasilSoal").innerHTML =
            "🎉 Benar! Jawaban kamu tepat.";
    } else {
        document.getElementById("hasilSoal").innerHTML =
            "❌ Belum tepat. Coba lagi!";
    }
    function bukaPeringkat() {
    document.getElementById("materi").innerHTML = `
        <h2>🏆 Peringkat Pelajar</h2>

        <p>🥇 Kamu — 100</p>
        <p>🥈 Andi — 90</p>
        <p>🥉 Siti — 80</p>
        <p>4️⃣ Budi — 75</p>

        <button onclick="location.reload()">
            🏠 Kembali ke Beranda
        </button>
    `;
}
function bukaProfil() {
    document.querySelector(".app").style.display = "none";

    document.getElementById("materi").innerHTML = `
        <div class="halaman">
            <h2>👤 Profil Pelajar</h2>

            <p>👤 <b>Nama:</b> Pelajar EduSmart</p>
            <p>🏫 <b>Sekolah:</b> SMP</p>
            <p>📚 <b>Kelas:</b> 9</p>
            <p>🏆 <b>Prestasi:</b> Rajin Belajar</p>

            <button onclick="kembaliBeranda()">
                🏠 Kembali ke Beranda
            </button>
        </div>
    `;
}

function kembaliBeranda() {
    document.querySelector(".app").style.display = "block";
    document.getElementById("materi").innerHTML = "";
}
    document.getElementById("materi").innerHTML = `
        <h2>👤 Profil Pelajar</h2>

        <p>👤 Nama: Pelajar EduSmart</p>
        <p>🏫 Sekolah: SMP</p>
        <p>📚 Kelas: 9</p>
        <p>🏆 Prestasi: Rajin Belajar</p>

        <button onclick="location.reload()">
            🏠 Kembali ke Beranda
        </button>
    `;