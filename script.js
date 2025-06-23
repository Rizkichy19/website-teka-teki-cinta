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
            localStorage.setItem('teka4_solved', 'false'); 
            localStorage.setItem('timer_result_shown', 'false'); // Untuk memastikan halaman timer sudah dilihat
            // Bersihkan juga data waktu sebelumnya jika ada
            localStorage.removeItem('relationship_start_date'); 
            window.location.href = 'teka1.html';
        });
    }

    // --- Logika untuk teka1.html (Pilihan Ganda) ---
    const cekTeka1Btn = document.getElementById('cekTeka1Btn');
    if (cekTeka1Btn) {
        console.log("Halaman Teka-teki 1 dimuat.");
        cekTeka1Btn.addEventListener('click', () => {
            const pesanDiv = document.getElementById('pesanTeka1');
            const selectedOption = document.querySelector('input[name="jawabanTeka1Options"]:checked');
            let jawabanUser = '';
            if (selectedOption) {
                jawabanUser = selectedOption.value.trim().toLowerCase();
            } else {
                pesanDiv.innerHTML = '<span class="pesan-gagal">Oops, kamu belum memilih jawaban! Ingat, cinta butuh kepastian! 😅</span>';
                console.log("Teka-teki 1: Tidak ada jawaban dipilih.");
                return;
            }
            const jawabanBenarTeka1 = "tempo gelato";
            console.log("Jawaban User (Teka 1):", jawabanUser);
            console.log("Jawaban Benar (Teka 1):", jawabanBenarTeka1);
            if (jawabanUser === jawabanBenarTeka1) {
                pesanDiv.innerHTML = '<span class="pesan-sukses">Yess! Kamu memang detektif kenangan terbaikku! Lanjut! 🎉</span>';
                localStorage.setItem('teka1_solved', 'true');
                console.log("Teka-teki 1 berhasil diselesaikan.");
                setTimeout(() => {
                    window.location.href = 'teka2.html';
                }, 2000);
            } else {
                pesanDiv.innerHTML = '<span class="pesan-gagal">Hmm, sepertinya ingatanmu perlu di-refresh nih, Sayang. Coba ingat-ingat lagi waktu kita makan bareng! 😂</span>';
                selectedOption.checked = false; 
                console.log("Teka-teki 1 jawaban salah.");
            }
        });
    }

    // --- Logika untuk teka2.html (Pilihan Ganda - Multiple Select / Checkbox) ---
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
            const pesanDiv = document.getElementById('pesanTeka2');
            
            const selectedOptions = document.querySelectorAll('input[name="jawabanTeka2Options"]:checked');
            let jawabanUserArray = [];
            selectedOptions.forEach(option => {
                jawabanUserArray.push(option.value.trim().toLowerCase());
            });

            if (jawabanUserArray.length === 0) {
                pesanDiv.innerHTML = '<span class="pesan-gagal">Duh, belum pilih jawaban! Gimana mau tahu aku kan? 🤷‍♀️</span>';
                console.log("Teka-teki 2: Tidak ada jawaban dipilih.");
                return;
            }
            const jawabanBenarTeka2 = ["nasi goreng", "mie ayam"]; // Daftar semua jawaban yang benar
            
            console.log("Jawaban User (Teka 2):", jawabanUserArray);
            console.log("Jawaban Benar (Teka 2):", jawabanBenarTeka2);

            const isCorrect = 
                jawabanUserArray.length === jawabanBenarTeka2.length &&
                jawabanUserArray.every(val => jawabanBenarTeka2.includes(val));

            if (isCorrect) { 
                pesanDiv.innerHTML = '<span class="pesan-sukses">Yeay! Kamu memang tahu semua tentang perutku! Lanjut ke misi berikutnya! 😋</span>';
                localStorage.setItem('teka2_solved', 'true');
                console.log("Teka-teki 2 berhasil diselesaikan.");
                setTimeout(() => {
                    window.location.href = 'teka3.html';
                }, 2000);
            } else {
                pesanDiv.innerHTML = '<span class="pesan-gagal">Waduh, masa makanan favoritku nggak tahu sih? Coba ingat-ingat lagi waktu kita makan bareng! 🤔</span>';
                selectedOptions.forEach(option => option.checked = false); 
                console.log("Teka-teki 2 jawaban salah.");
            }
        });
    }

    // --- Logika untuk teka3.html (Soal Matematika) ---
    const cekMatematikaBtn = document.getElementById('cekMatematikaBtn');
    const jawabanMatematikaInput = document.getElementById('jawabanMatematika');
    const pesanTeka3Div = document.getElementById('pesanTeka3');

    const letterMap = {
        '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F', '7': 'G', '8': 'H', '9': 'I', '10': 'J',
        '11': 'K', '12': 'L', '13': 'M', '14': 'N', '15': 'O', '16': 'P', '17': 'Q', '18': 'R', '19': 'S',
        '20': 'T', '21': 'U', '22': 'V', '23': 'W', '24': 'X', '25': 'Y', '26': 'Z'
    };

    const jawabanBenarMatematika = "iloveyou";

    if (cekMatematikaBtn) {
        console.log("Halaman Teka-teki 3 (Matematika) dimuat.");
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
                pesanTeka3Div.innerHTML = '<span class="pesan-sukses">Misi selesai, agen cinta! Kamu memang jenius di mataku! ❤️‍🔥</span>';
                localStorage.setItem('teka3_solved', 'true');
                console.log("Teka-teki 3 berhasil diselesaikan.");
                setTimeout(() => {
                    window.location.href = 'teka4.html'; // Mengarahkan ke teka4.html
                }, 2000);
            } else {
                pesanTeka3Div.innerHTML = '<span class="pesan-gagal">Kode cintanya masih rahasia nih, agen. Coba hitung lagi dengan cermat ya! 🧐</span>';
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

    // --- Logika untuk teka4.html (Password Tanggal Jadian & Hitung Waktu) ---
    const passwordDisplay = document.getElementById('passwordDisplay');
    const keypadButtons = document.querySelectorAll('.keypad-button');
    const cekPasswordBtn = document.getElementById('cekPasswordBtn'); // Tombol submit utama di keypad
    const pesanTeka4Div = document.getElementById('pesanTeka4');

    const anniversaryDate = new Date('2023-03-23T00:00:00'); // Tanggal jadian Anda (YYYY-MM-DD)
    const correctPassword = '23032023'; // Format DDMMYYYY tanpa pemisah
    let enteredPassword = ''; // Variabel untuk menyimpan password yang diketik

    if (passwordDisplay && keypadButtons.length > 0) { // Pastikan elemen-elemen ada di halaman
        console.log("Halaman Teka-teki 4 dimuat.");
        if (localStorage.getItem('teka3_solved') !== 'true') {
            console.log("Teka-teki 3 belum selesai, redirect ke index.html.");
            alert('Kamu harus menyelesaikan teka-teki sebelumnya dulu!');
            window.location.href = 'index.html';
            return;
        }

        keypadButtons.forEach(button => {
            button.addEventListener('click', () => {
                const digit = button.dataset.digit;
                const action = button.dataset.action;

                if (digit) { // Tombol angka
                    if (enteredPassword.length < 8) { // Batasi panjang password menjadi 8 digit
                        enteredPassword += digit;
                        passwordDisplay.textContent = enteredPassword; // Tampilkan angka yang diketik
                    }
                } else if (action === 'clear') {
                    enteredPassword = '';
                    passwordDisplay.textContent = '';
                    pesanTeka4Div.innerHTML = ''; // Hapus pesan jika clear
                } else if (action === 'backspace') {
                    enteredPassword = enteredPassword.slice(0, -1);
                    passwordDisplay.textContent = enteredPassword;
                    pesanTeka4Div.innerHTML = ''; // Hapus pesan jika backspace
                }
            });
        });

        if (cekPasswordBtn) {
            cekPasswordBtn.addEventListener('click', () => {
                if (enteredPassword === correctPassword) {
                    pesanTeka4Div.innerHTML = '<span class="pesan-sukses">Kunci berhasil! Menghitung waktu cinta kita... ❤️</span>';
                    
                    // --- Simpan tanggal jadian ke localStorage agar timer_result bisa mengambilnya ---
                    localStorage.setItem('relationship_start_date', anniversaryDate.toISOString()); // <-- BARIS BARU INI
                    localStorage.setItem('teka4_solved', 'true'); // Tandai teka-teki 4 selesai

                    console.log("Password benar, waktu disimpan. Mengarahkan ke hasil timer.");
                    setTimeout(() => {
                        window.location.href = 'timer_result.html'; // <-- Mengarahkan ke halaman hasil timer
                    }, 1500); // Redirect setelah 1.5 detik

                } else {
                    pesanTeka4Div.innerHTML = '<span class="pesan-gagal">Ups, password salah! Tanggal jadian kita kok lupa sih, Sayang? 😟</span>';
                    enteredPassword = ''; // Reset password setelah salah
                    passwordDisplay.textContent = ''; // Kosongkan tampilan
                    console.log("Teka-teki 4 password salah.");
                }
            });
        }
    }

    // --- Logika untuk timer_result.html (Menampilkan Hasil Waktu Hubungan LIVE) ---
    const finalTimeDisplay = document.getElementById('finalTimeDisplay');
    const lanjutPesanCintaBtn = document.getElementById('lanjutPesanCintaBtn');

    let timerResultInterval; // Variabel untuk menyimpan interval agar bisa dihentikan nanti

    if (finalTimeDisplay && lanjutPesanCintaBtn) { // Pastikan elemen-elemen ada di halaman
        console.log("Halaman Hasil Timer dimuat.");

        if (localStorage.getItem('teka4_solved') !== 'true' || !localStorage.getItem('relationship_start_date')) {
            console.log("Teka-teki 4 belum selesai atau tanggal tidak ada, redirect ke index.html.");
            alert('Kamu harus menyelesaikan teka-teki sebelumnya dulu!');
            window.location.href = 'index.html';
            return;
        }
        localStorage.setItem('timer_result_shown', 'true'); // Tandai bahwa hasil timer sudah dilihat

        const storedAnniversaryDateString = localStorage.getItem('relationship_start_date');
        const anniversaryDateObj = new Date(storedAnniversaryDateString); // Ubah kembali jadi Date object

        const updateTimerDisplay = () => {
            const now = new Date();
            
            let years = now.getFullYear() - anniversaryDateObj.getFullYear();
            let months = now.getMonth() - anniversaryDateObj.getMonth();
            let days = now.getDate() - anniversaryDateObj.getDate();
            let hours = now.getHours() - anniversaryDateObj.getHours();
            let minutes = now.getMinutes() - anniversaryDateObj.getMinutes();
            let seconds = now.getSeconds() - anniversaryDateObj.getSeconds();

            if (seconds < 0) { minutes--; seconds += 60; }
            if (minutes < 0) { hours--; minutes += 60; }
            if (hours < 0) { days--; hours += 24; }
            if (days < 0) { 
                months--;
                const tempDate = new Date(now.getFullYear(), now.getMonth(), 0);
                days += tempDate.getDate();
            }
            if (months < 0) { 
                years--;
                months += 12;
            }
            
            years = Math.max(0, years);
            months = Math.max(0, months);
            days = Math.max(0, days);
            hours = Math.max(0, hours);
            minutes = Math.max(0, minutes);
            seconds = Math.max(0, seconds);

            finalTimeDisplay.innerHTML = `
                ${years} <small>tahun</small>, 
                ${months} <small>bulan</small>, 
                ${days} <small>hari</small>, 
                ${hours} <small>jam</small>, 
                ${minutes} <small>menit</small>, 
                ${seconds} <small>detik</small>
            `;
        };

        updateTimerDisplay(); // Panggil fungsi update segera setelah halaman dimuat
        timerResultInterval = setInterval(updateTimerDisplay, 1000); // Kemudian set interval untuk memperbarui setiap detik

        lanjutPesanCintaBtn.addEventListener('click', () => {
            console.log("Mengarahkan ke halaman pesan cinta.");
            clearInterval(timerResultInterval); // Hentikan timer saat pindah halaman
            window.location.href = 'akhir.html';
        });
    }

    // --- Logika untuk akhir.html (Menampilkan Pesan Cinta TANPA Database) ---
    const pesanCintaContainer = document.getElementById('pesanCintaContainer');
    const isiPesanCintaDiv = document.getElementById('isiPesanCinta');

    if (pesanCintaContainer && isiPesanCintaDiv) { // Pastikan elemen-elemen ada di halaman
        console.log("Halaman Akhir dimuat.");
        if (localStorage.getItem('teka1_solved') !== 'true' ||
            localStorage.getItem('teka2_solved') !== 'true' ||
            localStorage.getItem('teka3_solved') !== 'true' ||
            localStorage.getItem('teka4_solved') !== 'true' ||
            localStorage.getItem('timer_result_shown') !== 'true') { 
            
            isiPesanCintaDiv.innerHTML = '<span class="pesan-gagal">Maaf, kamu harus menyelesaikan semua teka-teki terlebih dahulu!</span>';
            console.log("Teka-teki belum lengkap/hasil timer belum dilihat, pesan cinta tidak dimuat.");
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
            return;
        }

        const pesanCintaStatis = `Congrats, sayangku! Kamu berhasil menyelesaikan semua teka-teki ini. Thank you for coming in my life. I love u so much ❤️ This is my mini gift for u i hope u can feel happy, semoga kamu suka!

GET WELL SOON CANTIKKU BESOK" GA USAH NGEYEL KALO DIBILANGIN ❤️`; 
        
        isiPesanCintaDiv.textContent = pesanCintaStatis;
        console.log("Pesan cinta statis berhasil ditampilkan.");

    }

}); // Akhir dari DOMContentLoaded