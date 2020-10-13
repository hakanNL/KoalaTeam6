@team6
Feature: KoalaPalace Hotel Room Reservation Creation
  Background: Koala Palace Admin Giris
    Given kullanici "http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl=%2FAdmin%2FUserAdmin" sayfasina gider
    And kullanici kullaniciadi ve sifresini girer
    Then kullanici giris islemini gerceklestirir

     #hakan bey
  @koalapalaceLogin,@hakanbey
  #Feature: Koala Palace
  Scenario: TC11_Koala Palace Giris islemi yapilir
    Given kullanici koalapalace admin sayfasina gider
    And kullanici Welcome To Koalapalace yazisini gorur
    And kullanici logine clik yapar
    And kullanici kullaniciadi ve sifresini girer ve entere basar
    Then kullanici LISTOFUSER yazisini gorur

  @roomreservationdates
  @roomreservationdatespositive01  @onurbey
  Scenario: TC01_kullanici valid datestart ve dateend verileriyle room reservation olusturur
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "11/11/2021" girer
    And kullanici room reservation DateEnd bolumune "11/12/2021" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then And kullanici basarili yazisini assert eder.
  @roomreservationdates
  @roomreservationdatespositive02    @onurbey
  Scenario: TC02_kullanici valid artik yil verileri girerek room reservation olusturur
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "02/29/2024" girer
    And kullanici room reservation DateEnd bolumune "02/29/2028" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then And kullanici basarilidir yazisini assert eder.
  @roomreservationdates
  @roomreservationdatesnegative01    @onurbey
  Scenario: TC03_kullanici datestart bolumune dateendden ileri bir tarih girerek room reservation olusturur
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "12/30/2021" girer
    And kullanici room reservation DateEnd bolumune "01/30/2021" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then And kullanici basarili yazisini ekranda gormemeli.
  @roomreservationdates
  @roomreservationdatesnegative02   @onurbey
  Scenario: TC04_kullanici datestart bolumunu bos birakip, dateende valid veri girerek room reservation olusturur
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "" girer
    And kullanici room reservation DateEnd bolumune "11/22/2021" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then And kullanici hatamesaji almali.
  @roomreservationdates
  @roomreservationdatesnegative03    @onurbey
  Scenario: TC05_kullanici dateend bolumunu bos birakip, datestarta valid veri girerek room reservation olusturur
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "11/22/2021" girer
    And kullanici room reservation DateEnd bolumune "" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then And kullanici DateEnd kisminda hatamesaji almali.
  @roomreservationdates
  @roomreservationdatesnegative04   @onurbey
  Scenario: TC06_kullanici datestart ve dateend bolumunu bos birakip room reservation olusturur
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "" girer
    And kullanici room reservation DateEnd bolumune "" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then And kullanici DateStart ve DateEnd kisminda hatamesaji almali.
  @roomreservationdates
  @roomreservationdatesnegative05    @onurbey
  Scenario: TC07_kullanici datestart ve dateend bolumune girisi "gun/ay/yil" seklinde olusturur
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "23/11/2021" girer
    And kullanici room reservation DateEnd bolumune "24/11/2021" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then And kullanici DateStart ve DateEndde hatamesaji almali ve basarili yazisi elde edilmemeli.
  @roomreservationdates
  @roomreservationdatesnegative06    @onurbey
  Scenario: TC08_kullanici datestart ve dateend bolumune ayirac olarak harf,ters slash ve slah harici ifadeler girer
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "11?23;2021" girer
    And kullanici room reservation DateEnd bolumune "11*23'2021" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then And kullanici roomreservation basarili yazisi elde etmemeli.
  @roomreservationdates
  @roomreservationdatesnegative07     @onurbey
  Scenario: TC09_kullanici Dates kisminin ay bolumlerine 12'den buyuk ifadeler girer
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "13/11/2021" girer
    And kullanici room reservation DateEnd bolumune "14/11/2021" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then kullanici roomreservation basarilimi, basarili degilmi assert eder
  @roomreservationdates
  @roomreservationdatesnegative08     @onurbey
  Scenario: TC010_kullanici Dates kisminin gun bolumlerine o ayin gunlerinden buyuk ifadeler girer
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "10/34/2021" girer
    And kullanici room reservation DateEnd bolumune "10/35/2021" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then kullanici roomreservationin basarili olup olmadigini assert eder
  @roomreservationdates
  @roomreservationdatesnegative09    @onurbey
  Scenario: TC011_kullanici Dates kisimlarina gecmise donuk bilgiler girer
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "12/12/2000" girer
    And kullanici room reservation DateEnd bolumune "12/13/2000" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then kullanicim Dates bolumlerinde hatamesajlari alir
  @roomreservationdates
  @roomreservationdatesnegative10    @onurbey
  Scenario: TC012_kullanici datestart ve dateend bolumune ayirac olarak harf ve ters slash ifadeleri girer
    Given kullanici roomreservation sayfasina gider
    And kullanici room reservation IDUser1 bolumunde dropdowndan "manager2" secer
    And kullanici room reservation IDUser2 bolumunde dropdowndan "Hilton" secer
    And kullanici room reservation Price bolumune "300" girer
    And kullanici room reservation DateStart bolumune "12\11\2021" girer
    And kullanici room reservation DateEnd bolumune "24a11A2021" girer
    And kullanici room reservation AdultAmount bolumune "2" girer
    And kullanici room reservation ChildrenAmount bolumune "2" girer
    And kullanici room reservation ContactNameSurname bolumune "Onur Sniper" girer
    And kullanici room reservation ContactPhone bolumune "05452345623" girer
    And kullanici room reservation ContactEmail bolumune "onurnis@gmail.com" girer
    And kullanici room reservation Notes bolumune "1 haftalik kusursuz organizasyon gormek istiyorum" ekler
    And kullanici room reservation bolumunde save buttonuna tiklar
    Then kullanici dates bolumlerinden hata mesajlari almali


                          #Aysoltan Hanim
                        #Hotel Creat with Invalid Credentials Aysoltan
#Feature: Koala Palace
#  Background: Koala Palace Admin Giris
    Given kullanici koalapalace admin sayfasina gider
    And kullanici kullaniciadi ve sifresini girer
    Then kullanici giris islemini gerceklestirir
  @hotelcreate
  @hotelcreatenegativetest1    @aysoltanhanim
  Scenario: TC_01 kullanici code bolumunu girmez
    Given kullanici hotelcreate sayfasina gider
    #And kullanici hotelcreate code bolumune "XYZ345" girer
    And kullanici hotelcreate name bolumune "Hilton" girer
    And kullanici hotelcreate adress bolumune "Berlin" girer
    And kullanici hotelcreate phone bolumune "0539123456" girer
    And kullanici hotelcreate email bolumune "hiltonberlin@gmail.com" girer
    And kullanici hotelcreate idgroup bolumunde "Hotel Type1" secer
    And kullanici hotelcreate save butonuna tiklar
    Then kullanici hotelcreate kayit islemini assert eder
  @hotelcreate
  @hotelcreatenegativetest2    @aysoltanhanim
  Scenario: TC_02 kullanici name bolumune veri girmez
    Given kullanici hotelcreate sayfasina gider
    And kullanici hotelcreate code bolumune "XYZ345" girer
    #And kullanici hotelcreate name bolumune "Hilton" girer
    And kullanici hotelcreate adress bolumune "Berlin" girer
    And kullanici hotelcreate phone bolumune "0539123456" girer
    And kullanici hotelcreate email bolumune "hiltonberlin@gmail.com" girer
    And kullanici hotelcreate idgroup bolumunde "Hotel Type1" secer
    And kullanici hotelcreate save butonuna tiklar
    Then kullanici hotelcreate kayit islemini assert eder
  @hotelcreate
  @hotelcreatenegativetest3    @aysoltanhanim
  Scenario: TC_03 kullanici address bolumune veri girmez
    Given kullanici hotelcreate sayfasina gider
    And kullanici hotelcreate code bolumune "XYZ345" girer
    And kullanici hotelcreate name bolumune "Hilton" girer
    #And kullanici hotelcreate adress bolumune "Berlin" girer
    And kullanici hotelcreate phone bolumune "0539123456" girer
    And kullanici hotelcreate email bolumune "hiltonberlin@gmail.com" girer
    And kullanici hotelcreate idgroup bolumunde "Hotel Type1" secer
    And kullanici hotelcreate save butonuna tiklar
    Then kullanici hotelcreate kayit islemini assert eder
  @hotelcreate
  @hotelcreatenegativetest4    @aysoltanhanim
  Scenario: TC_0 kullanici phone bolumune veri girmez
    Given kullanici hotelcreate sayfasina gider
    And kullanici hotelcreate code bolumune "XYZ345" girer
    And kullanici hotelcreate name bolumune "Hilton" girer
    And kullanici hotelcreate adress bolumune "Berlin" girer
    #And kullanici hotelcreate phone bolumune "0539123456" girer
    And kullanici hotelcreate email bolumune "hiltonberlin@gmail.com" girer
    And kullanici hotelcreate idgroup bolumunde "Hotel Type1" secer
    And kullanici hotelcreate save butonuna tiklar
    Then kullanici hotelcreate kayit islemini assert eder
  @hotelcreate
  @hotelcreatenegativetest5     @aysoltanhanim
  Scenario: TC_05 kullanici e-mail bolumune veri girmez
    Given kullanici hotelcreate sayfasina gider
    And kullanici hotelcreate code bolumune "XYZ345" girer
    And kullanici hotelcreate name bolumune "Hilton" girer
    And kullanici hotelcreate adress bolumune "Berlin" girer
    And kullanici hotelcreate phone bolumune "0539123456" girer
    #And kullanici hotelcreate email bolumune "hiltonberlin@gmail.com" girer
    And kullanici hotelcreate idgroup bolumunde "Hotel Type1" secer
    And kullanici hotelcreate save butonuna tiklar
    Then kullanici hotelcreate kayit islemini assert eder
  @hotelcreate
  @hotelcreatenegativetest6     @aysoltanhanim
  Scenario: TC_06 kullanici idgroup dan secim yapmaz
    Given kullanici hotelcreate sayfasina gider
    And kullanici hotelcreate code bolumune "XYZ345" girer
    And kullanici hotelcreate name bolumune "Hilton" girer
    And kullanici hotelcreate adress bolumune "Berlin" girer
    And kullanici hotelcreate phone bolumune "0539123456" girer
    And kullanici hotelcreate email bolumune "hiltonberlin@gmail.com" girer
    #And kullanici hotelcreate idgroup bolumunde "Hotel Type1" secer
    And kullanici hotelcreate save butonuna tiklar
    Then kullanici hotelcreate kayit islemini assert eder


  #Meltem Hanim
  @hotelreservationcreate,@meltemhanim
  Scenario: TC11_kullanici bilgileri girerek room reservation olusturur
    Given kullanici hotelroomreservation sayfasina gider
    And kullanici roomreservation iduser bolumunde "manager2" secer
    And kullanici roomreservation idhotelroom bolumunde "Hilton" secer
    And kullanici roomreservation price bolumune "500" girer
    And kullanici roomreservation datestart bolumune "10/10/2020" girer
    And kullanici roomreservation dateend bolumune "10/17/2020" girer
    And kullanici roomreservation adultamaount bolumune "2" girer
    And kullanici roomreservation childrenamount bolumune "3" girer
    And kullanici roomreservation namesurname bolumune "Hamza Yılmaz" girer
    And kullanici roomreservation phone bolumune "0500600700" girer
    And kullanici roomreservation email bolumune "hamza@gmail.com" girer
    And kullanici roomreservation notes bolumune "Testerlardan selam.." girer
    And kullanici roomreservation save butonuna tiklar
    Then kullanici roomreservation kayit islemini assert eder




  @Salihbey
  @team06_koalapalace_hotelroomcreate   @hotelcreate1
  #Feature: Team06 Koala Palace Room Create
 # Background: Koala Palace Admin Giris
 #   Given team06_kullanici koalapalace admin sayfasina gider
  #  And team06_kullanici kullaniciadi ve sifresini girer
  #  Then team06_kullanici giris islemini gerceklestirir
  @Salihbey
  @team06_hotelroomcreate1  @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    #And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @Salihbey
  @team06_hotelroomcreate2  @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    #And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @Salihbey
  @team06_hotelroomcreate3  @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    #And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @Salihbey
  @team06_hotelroomcreate4   @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    #And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @Salihbey
  @team06_hotelroomcreate5   @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    #And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @Salihbey
  @team06_hotelroomcreate6   @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    #And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @Salihbey
  @team06_hotelroomcreate7   @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    #And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @Salihbey
  @team06_hotelroomcreate8   @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    #And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @Salihbey
  @team06_hotelroomcreate9  @team06_hotelroomcreate_hatali_veri   @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "2023 2023" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici "Fill All Fields Please" uyari mesaji aldigini assert eder
  @Salihbey
  @team06_hotelroomcreate10 @team06_hotelroomcreate_hatali_veri   @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "786" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici "Fill All Fields Please" uyari mesaji aldigini assert eder
  @Salihbey
  @team06_hotelroomcreate11 @team06_hotelroomcreate_hatali_veri   @hotelcreate1
  Scenario: TC08_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat "Pahali" girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici "Fill All Fields Please" uyari mesaji aldigini assert eder
  @Salihbey
  @team06_hotelroomcreate12 @team06_hotelroomcreate_hatali_veri   @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "HS" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici "Fill All Fields Please" uyari mesaji aldigini assert eder
  @Salihbey
  @team06_hotelroomcreate13 @team06_hotelroomcreate_hatali_veri   @hotelcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "HS" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici "Fill All Fields Please" uyari mesaji aldigini assert eder


#EMRULLAH
  @roomrezarvasyonu @emre @IDUser1
  Scenario: TC01_kullanici IdUser-1 kismini secmez
    And   kullanici addroom kismina click yapar
     # And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @IDUser2
  Scenario: TC02_kullanici IdUser-2 kismini secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    # And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @Price
  Scenario: TC03_kullanici Price kismini secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    # And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @AdultAmont
  Scenario: TC04_kullanici AdultAmont kismini secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    # And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @ChildAmont
  Scenario: TC05_kullanici ChildAmont kismini secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    # And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @ContactName
  Scenario: TC06_kullanici ContactName kismini secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    # And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @ContactPhone
  Scenario: TC07_kullanici ContactPhone kismi secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    # And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @Email
  Scenario: TC08_kullanici Notes kismi secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    # And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @Notes
  Scenario: TC09_kullanici Notes kismi secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    # And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @Aproved
  Scenario: TC10_kullanici Aproved kismi secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli
  @roomrezarvasyonu @emre @IsPaid
  Scenario: TC11_kullanici Is kismi secmez
    And   kullanici addroom kismina click yapar
    And kullanici birinci IDUser kismini dropdown ile secer
    And kullanici ikinci IDUser kismini dropdown ile secer
    And kullanici price kismini secer ve value yollar
    And kullanici giris tarihini secer ve yazar
    And kullanici cikis tarihini secer ve girer
    And kullanici AdultAmont kismini secer ve value gonderir
    And kullanici ChildAmont kismini secer ve value gonderir
    And kullanici ContactNameSurname kismini secer ve value gonderir
    And kullanici ContactPhone kismini secer ve value gonderir
    And kullanici Contact Email kismini secer ve value gonderir
    And kullanici Notes kismini secev ve value gonderir
    And kullanici Aproved kismini click yapar
    And kullanici IsPaid kismini click yapar
    And kullanici Save butonuna click yapar
    Then kullanici accept sonucunu ekranda gormemeli



#SENGUL HANIM
#Feature: Kullanici login olamamali
#Background:
#Given kullanici login sayfasina gider
  @loginpagetest
#  @loginpagenegativetests
  @loginpagenegativetest1  @sengulhanim
  Scenario: TC01_kullanici username yanlis giris yapar
    Given kullanici login sayfasinda deneme yapar
    And kullanici login sayfasinda username bolumunde "manager" girer
    And kullanici login sayfasinda password bolumunde "Man1ager2!" girer
    And kullanici login butonuna tiklar
    Then kullanici giris isleminin basarisiz oldugunu verify eder
  @loginpagetest
#@loginpagenegativetests
  @loginpagenegativetest2  @sengulhanim
  Scenario: TC01_kullanici password yanlis giris yapar
    Given kullanici login sayfasinda deneme yapar
    And kullanici login sayfasinda username bolumunde "manager2" girer
    And kullanici login sayfasinda password bolumunde "Man1ager!" girer
    And kullanici login butonuna tiklar
    Then kullanici giris isleminin basarisiz oldugunu verify eder
  @loginpagetest
#@loginpagenegativetests
  @loginpagenegativetest3   @sengulhanim
  Scenario: TC01_kullanici username ve password yanlis giris yapar
    Given kullanici login sayfasinda deneme yapar
    And kullanici login sayfasinda username bolumunde "manager" girer
    And kullanici login sayfasinda password bolumunde "Man1ager!" girer
    And kullanici login butonuna tiklar
    Then kullanici giris isleminin basarisiz oldugunu verify eder
  @loginpagetest
#@loginpagenegativetests
  @loginpagenegativetest4   @sengulhanim
  Scenario: TC01_kullanici username ve password bos giris yapar
    Given kullanici login sayfasinda deneme yapar
    And kullanici login butonuna tiklar
    Then kullanici username is required mesajini gorur
    Then kullanici password is required mesajini gorur

  @umutbey  @hotelmanagement @testcase_01
  Scenario: TC06_Koalapalace Hotel List goruntuleme
    Given kullanici Hotel Manangment sekmesine tiklar
    And kullanici Hotel List butonuna tiklar
    Then kullanici LIST OF HOTELS yazisini goruntuler
  @umutbey @hotelmanagement  @testcase_02
  Scenario: TC06_Koalapalace Hotel Rooms goruntuleme
    Given kullanici Hotel Manangment sekmesine tiklar
    And kullanici Hotel Rooms butonuna tiklar
    Then kullanici LIST OF ROOMS yazisini goruntuler
  @umutbey @hotelmanagement  @testcase_03
  Scenario: TC06_Koalapalace Hotel Rooms goruntuleme
    Given kullanici Hotel Manangment sekmesine tiklar
    And kullanici Room reservations butonuna tiklar
    Then kullanici LIST OF RESERVATIONS yazisini goruntuler



