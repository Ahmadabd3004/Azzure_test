import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

export default function Home() {
  const arr = [83, 1, 78, 26, 67, 54, 49, 7, 36, 99, 26, 19, 15, 7, 21, 39, 7, 2, 8];

  const bag1no1 = (arr) => {
    let result = 0;
    arr.forEach((e, idx) => {
      result++;
    });
    return result
  }

  const bag1no2 = (arr) => {
    let min = Infinity;
    arr.forEach((e) => {
      if (e < min) {
        min = e
      }
    });
    return min
  }

  const bag1no3 = (arr) => {
    let max = -Infinity;
    arr.forEach((e) => {
      if (e > max) {
        max = e
      }
    });
    return max
  }

  const bag1no4 = (arr) => {
    let result = {}
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      if (count > 1) {
        if (result[arr[i]]) {
          result[arr[i]]++
        } else {
          result[arr[i]] = 1
        }
      }
    }
    return result
  }

  const bag1no5 = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    let similarNumberPosition = {}
    let similar = Object.keys(bag1no4(arr))
    arr.forEach((e, idx) => {
      similar.forEach(num => {
        if (e == num) {
          if (similarNumberPosition[num]) {
            similarNumberPosition[num].push(idx + 1)
          } else {
            similarNumberPosition[num] = []
            similarNumberPosition[num].push(idx + 1)
          }
        }
      });
    });
    return {
      sortedArray: arr,
      similarNumberPosition
    }
  }

  const bag1no6 = (arr) => {
    let ganjil = 0;
    let genap = 0;
    arr.forEach(e => {
        if (e % 2 == 0) {
            genap++;
        } else {
            ganjil++
        }
    });
    return {
        ganjil, genap
    }
}

const bag1no7 = (arr) => {
  let obj = {
      ganjil: [],
      genap: []
  }
  arr.forEach(e => {
      if (e % 2 == 0) {
          obj.genap.push(e)
      } else {
          obj.ganjil.push(e)
      }
  });
  return obj;
}
  return (
    <>
      <Head>
        <title>Ahmad Abdul Azis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Soal No 1</h1>
        <p> 1.Buat algoritma hitung jumlah anggota Variable Himpunan Bilangan Asli</p>
        <p>Jumlah anggota Variable Himpunan Bilangan Asli : {bag1no1(arr)}</p>

        <h1>Soal No 2</h1>
        <p>Buat algoritma untuk menghasilkan anggota terkecil dari Variable Himpunan Bilangan Asli</p>
        <p>Anggota terkecil dari Variable Himpunan Bilangan Asli adalah {bag1no2(arr)}</p>

        <h1>Soal No 3</h1>
        <p>Buat algoritma untuk menghasilkan anggota terbesar dari Variable Himpunan Bilangan Asli</p>
        <p>Anggota terbesar dari Variable Himpunan Bilangan Asli adalah {bag1no3(arr)}</p>

        <h1>Soal No 4</h1>
        <p>Buat algoritma untuk mencari & menghasilkan anggota dari Variable Himpunan Bilangan Asli dengan nilai angka sama dan lebih dari satu</p>
        <p>Bilangan yang sama dan urutannya adalah {Object.keys(bag1no4(arr))[0]} berjumlah {bag1no4(arr)[7]} & {Object.keys(bag1no4(arr))[1]} berjumlah {bag1no4(arr)[26]}
        </p>

        <h1>Soal No 5</h1>
        <p>Buat algoritma jika diurutkan anggota himpunan bilangan asli dari kecil ke besar, untuk anggota yang memiliki nilai angka yang  sama dan lebih dari satu pada soal nomor 4 berada diurutan ke berapakah di Variable Himpunan Bilangan Asli ? </p>
        <p>Urutan anggota himpunan bilangan asli dari kecil ke besar {bag1no5(arr).sortedArray.map(e => e + ',')} dan urutan bilangan yang sama adalah {Object.keys(bag1no5(arr).similarNumberPosition)[0]} dengan urutan di  {bag1no5(arr).similarNumberPosition[7].map(e => e + ',')} dan {Object.keys(bag1no5(arr).similarNumberPosition)[1]} dengan urutan di  {bag1no5(arr).similarNumberPosition[26].map(e => e + ',')}</p>

        <h1>Soal No 6</h1>
        <p>Buat algoritma untuk menghitung jumlah bilangan ganjil dan bilangan genap ada berapa jumlahnya masing-masing?</p>
        <p>Jumlah Bilangan ganjil adalah {bag1no6(arr).ganjil} </p>
        <p>Jumlah Bilangan genap adalah {bag1no6(arr).genap} </p>
        
        <h1>Soal No 7</h1>
        <p>Buat algoritma untuk mengkelompokkan dan menampilkan anggota Variable Himpunan Bilangan Asli dalam kelompok bilangan ganjil dan bilangan genap</p>
        <p>Kelompok bilangan ganjil : {bag1no7(arr).ganjil.map(e => e + ',')}</p>
        <p>Kelompok bilangan genap : {bag1no7(arr).genap.map(e => e + ',')}</p>
      </main>
       
    </>
  )
}