// Fungsi untuk mendeteksi perubahan di halaman
function initPageChangeDetector() {
    // Konfigurasi MutationObserver untuk memantau seluruh dokumen
    const observerOptions = {
        childList: true,           // Memantau penambahan/penghapusan elemen anak
        subtree: true,              // Memantau seluruh sub-pohon DOM
        attributes: true,           // Memantau perubahan atribut
        characterData: true         // Memantau perubahan teks
    };

    // Variabel untuk melacak apakah perubahan sudah terjadi
    let changeDetected = false;

    // Membuat MutationObserver
    const observer = new MutationObserver((mutations) => {
        // Cek apakah sudah ada perubahan sebelumnya
        if (!changeDetected) {
            mutations.forEach((mutation) => {
                // Kondisi untuk mendeteksi berbagai jenis perubahan
                const isSignificantChange = 
                    mutation.type === 'childList' ||      // Penambahan/penghapusan elemen
                    mutation.type === 'attributes' ||     // Perubahan atribut
                    mutation.type === 'characterData';    // Perubahan teks

                if (isSignificantChange) {
                    changeDetected = true;
                    
                    // Opsional: Log perubahan untuk debugging
                    console.log('Perubahan terdeteksi:', mutation);

                    // Reload halaman setelah 1 detik untuk menghindari reload berulang
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                }
            });
        }
    });

    // Mulai memantau seluruh dokumen
    observer.observe(document.documentElement, observerOptions);

    // Tambahan: Fungsi untuk membersihkan observer jika diperlukan
    return {
        disconnect: () => {
            observer.disconnect();
        }
    };
}

// Fungsi untuk menjalankan detector saat halaman dimuat
function setupPageChangeDetection() {
    // Pastikan kode berjalan setelah DOM sepenuhnya dimuat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPageChangeDetector);
    } else {
        initPageChangeDetector();
    }
}

// Jalankan detector
setupPageChangeDetection();