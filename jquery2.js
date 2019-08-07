$(document).ready(function(){
    $('#button').click(function(){
        alert( " Nama : " +$("#Nama").val() 
            + " Alamat: " +$('#Alamat').val() 
            + "  NoHp : "+$('#NoHp').val()
            + " NamaOrangtua : " +$('#NamaOrangtua').val()
            + " AsalSekolah : " +$('#AsalSekolah').val()
            + " Jenis_Kelamin: " +$('input[name=Jenis_Kelamin]:checked').val());
        });
    });
