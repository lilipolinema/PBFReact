import React, {Component} from "react";
import './MahasiswaPost.css'
import Post from '../../component/MahasiswaPost/PostMahasiswa'


class MahasiswaPost extends Component{
    state = {
        listMahasiswa:[],
        insertMahasiswa:{
            NIM: "",
            id: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/mahasiswa')
        .then(Response => Response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listMahasiswa: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3002/mahasiswa/${data}`,{method: 'DELETE'})
        .then(res =>{
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp; 
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState( {
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/mahasiswa', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
        .then( ( Response ) => {
            this.ambilDataDariServerAPI();
        });
    }

    render(){
        return(
            <div className="post-Mahasiswa">
                <h2>Tambah Data Mahasiswa</h2>
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                        <textarea id="nama" name="nama" cols="1" rows="1" className="form-control" col="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                        <textarea id="alamat" name="alamat" cols="3" rows="3" className="form-control" col="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">No HP</label>
                        <div className="col-sm-10">
                        <textarea id="hp" name="hp" cols="1" rows="1" className="form-control" col="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                        <textarea id="angkatan" name="angkatan" cols="1" rows="1"  className="form-control" col="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Status Mahasiswa</label>
                        <div className="col-sm-10">
                        <textarea id="status" name="status" cols="1" rows="1" className="form-control" col="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan} >Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(Mahasiswa => {
                        return <Post key={Mahasiswa.id} NIM={Mahasiswa.NIM} nama={Mahasiswa.nama} alamat={Mahasiswa.alamat} hp={Mahasiswa.hp} angkatan={Mahasiswa.angkatan} status={Mahasiswa.status} idMahasiswa={Mahasiswa.id} hapusMahasiswa = {this.handleHapusMahasiswa}/>
                    })
                }
            </div>
        )
    }
}

export default MahasiswaPost;