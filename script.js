// --- script.js ---

// Fungsi yang akan dijalankan ketika DOM (struktur HTML) sudah dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {

    console.log("Script JavaScript terhubung dan berfungsi!"); // Pesan verifikasi awal

    // --- Logika untuk index.html ---
    const mulaiBtn = document.getElementById('mulaiBtn');
    if (mulaiBtn) {
        mulaiBtn.addEventListener('click', () => {
            // Inisialisasi progress teka-teki di localStorage
            localStorage.setItem('teka1_solved', 'false');
            localStorage.setItem('teka2_solved', 'false');
            localStorage.setItem('teka3_solved', 'false');

            // Arahkan ke halaman teka-teki pertama
            window.location.href = 'teka1.html';
        });
    }

    // --- Logika untuk teka1.html ---
    const cekTeka1Btn = document.getElementById('cekTeka1Btn');
    if (cekTeka1Btn) {
        console.log("Halaman Teka-teki 1 dimuat.");

        cekTeka1Btn.addEventListener('click', () => {
            const jawabanInput = document.getElementById('jawabanTeka1');
            const pesanDiv = document.getElementById('pesanTeka1');
            const jawabanUser = jawabanInput.value.trim().toLowerCase();

            const jawabanBenarTeka1 = "tempo gelato"; // Contoh, sesuaikan dengan jawaban Anda!

            console.log("Jawaban User (Teka 1):", jawabanUser);
            console.log("Jawaban Benar (Teka 1):", jawabanBenarTeka1);

            if (jawabanUser === jawabanBenarTeka1) {
                pesanDiv.innerHTML = '<span class="pesan-sukses">Yeay! Jawabanmu benar!</span>';
                localStorage.setItem('teka1_solved', 'true');
                console.log("Teka-teki 1 berhasil diselesaikan.");
                setTimeout(() => {
                    window.location.href = 'teka2.html';
                }, 2000);
            } else {
                pesanDiv.innerHTML = '<span class="pesan-gagal">Ups, jawabanmu salah. Coba lagi ya!</span>';
                jawabanInput.value = '';
                console.log("Teka-teki 1 jawaban salah.");
            }
        });

        const jawabanInputTeka1 = document.getElementById('jawabanTeka1');
        if (jawabanInputTeka1) {
            jawabanInputTeka1.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    cekTeka1Btn.click();
                }
            });
        }
    }

    // --- Logika untuk teka2.html ---
    const cekTeka2Btn = document.getElementById('cekTeka2Btn');
    if (cekTeka2Btn) {
        console.log("Halaman Teka-teki 2 dimuat.");
        if (localStorage.getItem('teka1_solved') !== 'true') {
            console.log("Teka-teki 1 belum selesai, redirect ke index.html.");
            alert('Kamu harus menyelesaikan teka-teki sebelumnya dulu!');
            window.location.href = 'index.html';
            return;
        }

        cekTeka2Btn.addEventListener('click', () => {
            const jawabanInput = document.getElementById('jawabanTeka2');
            const pesanDiv = document.getElementById('pesanTeka2');
            const jawabanUser = jawabanInput.value.trim().toLowerCase();

            const jawabanBenarTeka2 = "nasi goreng"; // Contoh, sesuaikan dengan jawaban Anda!

            console.log("Jawaban User (Teka 2):", jawabanUser);
            console.log("Jawaban Benar (Teka 2):", jawabanBenarTeka2);

            if (jawabanUser === jawabanBenarTeka2) {
                pesanDiv.innerHTML = '<span class="pesan-sukses">Betul sekali, Sayang! Kamu memang tahu segalanya tentang aku!</span>';
                localStorage.setItem('teka2_solved', 'true');
                console.log("Teka-teki 2 berhasil diselesaikan.");
                setTimeout(() => {
                    window.location.href = 'teka3.html';
                }, 2000);
            } else {
                pesanDiv.innerHTML = '<span class="pesan-gagal">Hmm, jawabanmu belum tepat. Ingat-ingat lagi makanan favoritku ya!</span>';
                jawabanInput.value = '';
                console.log("Teka-teki 2 jawaban salah.");
            }
        });

        const jawabanInputTeka2 = document.getElementById('jawabanTeka2');
        if (jawabanInputTeka2) {
            jawabanInputTeka2.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    cekTeka2Btn.click();
                }
            });
        }
    }

    // --- Logika untuk teka3.html (Soal Matematika) ---
    const cekMatematikaBtn = document.getElementById('cekMatematikaBtn');
    const jawabanMatematikaInput = document.getElementById('jawabanMatematika');
    const pesanTeka3Div = document.getElementById('pesanTeka3');

    // Mapping angka ke huruf (A=1, B=2, dst.). Ini untuk panduan Anda dan pacar Anda dalam membuat/memecahkan soal.
    const letterMap = {
        '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F', '7': 'G', '8': 'H', '9': 'I', '10': 'J',
        '11': 'K', '12': 'L', '13': 'M', '14': 'N', '15': 'O', '16': 'P', '17': 'Q', '18': 'R', '19': 'S',
        '20': 'T', '21': 'U', '22': 'V', '23': 'W', '24': 'X', '25': 'Y', '26': 'Z'
    };

    // Jawaban akhir yang diharapkan: "iloveyou" (8 huruf)
    const jawabanBenarMatematika = "iloveyou"; // SUDAH DISET KE "iloveyou"

    if (cekMatematikaBtn) {
        console.log("Halaman Teka-teki 3 (Matematika) dimuat.");
        // Pengamanan minimal: Pastikan teka-teki 2 sudah selesai
        if (localStorage.getItem('teka2_solved') !== 'true') {
            console.log("Teka-teki 2 belum selesai, redirect ke index.html.");
            alert('Kamu harus menyelesaikan teka-teki sebelumnya dulu!');
            window.location.href = 'index.html';
            return;
        }

        cekMatematikaBtn.addEventListener('click', () => {
            const jawabanUser = jawabanMatematikaInput.value.trim().toLowerCase();

            console.log("Jawaban User (Teka 3 Matematika):", jawabanUser);
            console.log("Jawaban Benar (Teka 3 Matematika):", jawabanBenarMatematika);

            if (jawabanUser === jawabanBenarMatematika) {
                pesanTeka3Div.innerHTML = '<span class="pesan-sukses">Sempurna! Kamu berhasil memecahkan kode cinta!</span>';
                localStorage.setItem('teka3_solved', 'true');
                console.log("Teka-teki 3 berhasil diselesaikan.");
                setTimeout(() => {
                    window.location.href = 'akhir.html';
                }, 2000);
            } else {
                pesanTeka3Div.innerHTML = '<span class="pesan-gagal">Ups, jawaban gabunganmu belum tepat. Coba cek lagi perhitungannya!</span>';
                jawabanMatematikaInput.value = '';
                console.log("Teka-teki 3 jawaban salah.");
            }
        });

        if (jawabanMatematikaInput) {
            jawabanMatematikaInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    cekMatematikaBtn.click();
                }
            });
        }
    }

    // --- Logika untuk akhir.html (Menampilkan Pesan Cinta dari Database) ---
   // --- Logika untuk akhir.html (Menampilkan Pesan Cinta TANPA Database) ---
    const pesanCintaContainer = document.getElementById('pesanCintaContainer');
    const isiPesanCintaDiv = document.getElementById('isiPesanCinta');

    if (pesanCintaContainer && isiPesanCintaDiv) {
        console.log("Halaman Akhir dimuat.");
        // Pengamanan minimal: Pastikan semua teka-teki sudah selesai
        if (localStorage.getItem('teka1_solved') !== 'true' ||
            localStorage.getItem('teka2_solved') !== 'true' ||
            localStorage.getItem('teka3_solved') !== 'true') {
            
            isiPesanCintaDiv.innerHTML = '<span class="pesan-gagal">Maaf, kamu harus menyelesaikan semua teka-teki terlebih dahulu!</span>';
            console.log("Teka-teki belum lengkap, pesan cinta tidak dimuat.");
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
            return;
        }

        // --- Bagian ini adalah pengganti untuk pemanggilan database ---
        // Anda bisa menaruh pesan cinta langsung di sini
        const pesanCintaStatis = `Selamat, sayangku! Kamu berhasil menyelesaikan semua teka-teki ini. Setiap teka-teki adalah bagian dari perjalanan cinta kita, dan setiap jawaban benar adalah bukti betapa kuatnya ikatan kita. Terima kasih sudah selalu ada di sisiku. Aku mencintaimu lebih dari kata-kata yang bisa ungkapkan. Ini adalah hadiah kecil dariku untukmu, semoga kamu suka!

GET WELL SOON CANTIKKU BESOK" GA USAH NGEYEL KALO DIBILANGIN ❤️`;
        
        isiPesanCintaDiv.textContent = pesanCintaStatis;
        console.log("Pesan cinta statis berhasil ditampilkan.");
        // --- Akhir dari pengganti database ---

    }

}); // Akhir dari DOMContentLoaded