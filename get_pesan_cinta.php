<?php
// get_pesan_cinta.php

require_once 'config.php'; // Panggil file konfigurasi database

$response = array('success' => false, 'message' => 'Terjadi kesalahan tidak dikenal.');

// Buat koneksi ke database
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Cek koneksi
if ($conn->connect_error) {
    $response['message'] = 'Koneksi database gagal: ' . $conn->connect_error;
    echo json_encode($response);
    exit();
}

// Ambil pesan cinta dari tabel pesan_cinta
// Kita ambil satu pesan saja (yang pertama atau acak)
$sql = "SELECT isi_pesan FROM pesan_cinta ORDER BY id ASC LIMIT 1"; // Ambil pesan pertama
// Atau untuk pesan acak: $sql = "SELECT isi_pesan FROM pesan_cinta ORDER BY RAND() LIMIT 1";

$result = $conn->query($sql);

if ($result) {
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $response['success'] = true;
        $response['message'] = $row['isi_pesan'];
    } else {
        $response['message'] = 'Tidak ada pesan cinta di database.';
    }
} else {
    $response['message'] = 'Query database gagal: ' . $conn->error;
}

$conn->close();

echo json_encode($response); // Kirim respons dalam format JSON
?>