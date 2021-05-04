const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if(nilaiAwal < nilaiAkhir)
  {
    const hasil = dataArray.filter(function(num){
    return num > nilaiAwal && num < nilaiAkhir     
    })
    if(dataArray.length > 5)
    {
      console.log(hasil.sort((a,b) => a - b))
    }
    else
    {
      console.log("Jumlah angka dalam array harus lebih dari 5")
    }
  }
  else
  {
    console.log("Nilai akhir harus lebih besar dari nilai awal")
  }
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])