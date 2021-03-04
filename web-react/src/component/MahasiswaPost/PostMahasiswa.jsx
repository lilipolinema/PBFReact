import React from "react"

const MahasiswaPost = (props) => {
    return(
        <div className="mahasiswa">
            <div className="gambar-polinema">
                <img src="https://2.bp.blogspot.com/-WSBm5s-SXJA/WGMwNMeAfJI/AAAAAAAABHM/BTT5cbgbChsamZP8EHOK3Su7rFv55GXgACLcB/s1600/Pendaftaran%2BPolinema%2B.png" alt="Gambar Tumbnail Polinema"/>
            </div>
            <div className="konten-mahasiswa">
                <div className="nimnam-mahasiswa">{props.NIM} - {props.nama}</div>
                    <p className="isi-mahasiswa">--------------------------------------------------------------------------------</p>
                    <p className="isi-mahasiswa">{props.alamat}</p>
                    <p className="isi-mahasiswa">{props.hp}</p>
                    <p className="isi-mahasiswa">{props.angkatan}</p>
                    <p className="isi-mahasiswa">{props.status}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}

export default MahasiswaPost;