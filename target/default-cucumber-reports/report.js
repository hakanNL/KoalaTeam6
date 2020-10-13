$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/koalapalace.feature");
formatter.feature({
  "name": "KoalaPalace Hotel Room Reservation Creation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@team6"
    }
  ]
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC11_Koala Palace Giris islemi yapilir",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@koalapalaceLogin,@hakanbey"
    }
  ]
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Welcome To Koalapalace yazisini gorur",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Welcome_To_Koalapalace_yazisini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici logine clik yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_logine_clik_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer ve entere basar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer_ve_entere_basar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici LISTOFUSER yazisini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_LISTOFUSER_yazisini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_kullanici valid datestart ve dateend verileriyle room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatespositive01"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"11/11/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"11/12/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "And kullanici basarili yazisini assert eder.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.and_kullanici_basarili_yazisini_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_kullanici valid artik yil verileri girerek room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatespositive02"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"02/29/2024\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"02/29/2028\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "And kullanici basarilidir yazisini assert eder.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.and_kullanici_basarilidir_yazisini_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_kullanici datestart bolumune dateendden ileri bir tarih girerek room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative01"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"12/30/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"01/30/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "And kullanici basarili yazisini ekranda gormemeli.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.and_kullanici_basarili_yazisini_ekranda_gormemeli()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat stepdefinitions.KoalaStepDef.and_kullanici_basarili_yazisini_ekranda_gormemeli(KoalaStepDef.java:148)\r\n\tat ✽.And kullanici basarili yazisini ekranda gormemeli.(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:68)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC04_kullanici datestart bolumunu bos birakip, dateende valid veri girerek room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative02"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"11/22/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "And kullanici hatamesaji almali.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.and_kullanici_hatamesaji_almali()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici dateend bolumunu bos birakip, datestarta valid veri girerek room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative03"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"11/22/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "And kullanici DateEnd kisminda hatamesaji almali.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.and_kullanici_DateEnd_kisminda_hatamesaji_almali()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_kullanici datestart ve dateend bolumunu bos birakip room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative04"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "And kullanici DateStart ve DateEnd kisminda hatamesaji almali.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.and_kullanici_DateStart_ve_DateEnd_kisminda_hatamesaji_almali()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC07_kullanici datestart ve dateend bolumune girisi \"gun/ay/yil\" seklinde olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative05"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"23/11/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"24/11/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "And kullanici DateStart ve DateEndde hatamesaji almali ve basarili yazisi elde edilmemeli.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.and_kullanici_DateStart_ve_DateEndde_hatamesaji_almali_ve_basarili_yazisi_elde_edilmemeli()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat stepdefinitions.KoalaStepDef.and_kullanici_DateStart_ve_DateEndde_hatamesaji_almali_ve_basarili_yazisi_elde_edilmemeli(KoalaStepDef.java:187)\r\n\tat ✽.And kullanici DateStart ve DateEndde hatamesaji almali ve basarili yazisi elde edilmemeli.(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:136)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC08_kullanici datestart ve dateend bolumune ayirac olarak harf,ters slash ve slah harici ifadeler girer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative06"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"11?23;2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"11*23\u00272021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "And kullanici roomreservation basarili yazisi elde etmemeli.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.and_kullanici_roomreservation_basarili_yazisi_elde_etmemeli()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat stepdefinitions.KoalaStepDef.and_kullanici_roomreservation_basarili_yazisi_elde_etmemeli(KoalaStepDef.java:199)\r\n\tat ✽.And kullanici roomreservation basarili yazisi elde etmemeli.(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:153)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC09_kullanici Dates kisminin ay bolumlerine 12\u0027den buyuk ifadeler girer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative07"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"13/11/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"14/11/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation basarilimi, basarili degilmi assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_basarilimi_basarili_degilmi_assert_eder()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat stepdefinitions.KoalaStepDef.kullanici_roomreservation_basarilimi_basarili_degilmi_assert_eder(KoalaStepDef.java:211)\r\n\tat ✽.kullanici roomreservation basarilimi, basarili degilmi assert eder(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:170)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC010_kullanici Dates kisminin gun bolumlerine o ayin gunlerinden buyuk ifadeler girer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative08"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"10/34/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"10/35/2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservationin basarili olup olmadigini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservationin_basarili_olup_olmadigini_assert_eder()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat stepdefinitions.KoalaStepDef.kullanici_roomreservationin_basarili_olup_olmadigini_assert_eder(KoalaStepDef.java:223)\r\n\tat ✽.kullanici roomreservationin basarili olup olmadigini assert eder(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:187)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC011_kullanici Dates kisimlarina gecmise donuk bilgiler girer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative09"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"12/12/2000\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"12/13/2000\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanicim Dates bolumlerinde hatamesajlari alir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanicim_Dates_bolumlerinde_hatamesajlari_alir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC012_kullanici datestart ve dateend bolumune ayirac olarak harf ve ters slash ifadeleri girer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomreservationdates"
    },
    {
      "name": "@roomreservationdatesnegative10"
    },
    {
      "name": "@onurbey"
    }
  ]
});
formatter.step({
  "name": "kullanici roomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser1 bolumunde dropdowndan \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser1_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation IDUser2 bolumunde dropdowndan \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_IDUser2_bolumunde_dropdowndan_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Price bolumune \"300\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateStart bolumune \"12\\11\\2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateStart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation DateEnd bolumune \"24a11A2021\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_DateEnd_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation AdultAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_AdultAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ChildrenAmount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ChildrenAmount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactNameSurname bolumune \"Onur Sniper\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactNameSurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactPhone bolumune \"05452345623\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactPhone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation ContactEmail bolumune \"onurnis@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_ContactEmail_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation Notes bolumune \"1 haftalik kusursuz organizasyon gormek istiyorum\" ekler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_Notes_bolumune_ekler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici room reservation bolumunde save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_room_reservation_bolumunde_save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dates bolumlerinden hata mesajlari almali",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_dates_bolumlerinden_hata_mesajlari_almali()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#UserName\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7BM0IB0\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\onurn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57567}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b00a7448da4fc334eaeea65d147c119a\n*** Element info: {Using\u003did, value\u003dUserName}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer(KoalaStepDef.java:24)\r\n\tat ✽.kullanici kullaniciadi ve sifresini girer(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:229)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_01 kullanici code bolumunu girmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@hotelcreate"
    },
    {
      "name": "@hotelcreatenegativetest1"
    },
    {
      "name": "@aysoltanhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate name bolumune \"Hilton\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate adress bolumune \"Berlin\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_adress_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate phone bolumune \"0539123456\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate email bolumune \"hiltonberlin@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate idgroup bolumunde \"Hotel Type1\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_idgroup_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate kayit islemini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_kayit_islemini_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 kullanici name bolumune veri girmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@hotelcreate"
    },
    {
      "name": "@hotelcreatenegativetest2"
    },
    {
      "name": "@aysoltanhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate code bolumune \"XYZ345\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate adress bolumune \"Berlin\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_adress_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate phone bolumune \"0539123456\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate email bolumune \"hiltonberlin@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate idgroup bolumunde \"Hotel Type1\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_idgroup_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate kayit islemini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_kayit_islemini_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_03 kullanici address bolumune veri girmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@hotelcreate"
    },
    {
      "name": "@hotelcreatenegativetest3"
    },
    {
      "name": "@aysoltanhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate code bolumune \"XYZ345\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate name bolumune \"Hilton\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate phone bolumune \"0539123456\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate email bolumune \"hiltonberlin@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate idgroup bolumunde \"Hotel Type1\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_idgroup_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate kayit islemini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_kayit_islemini_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0 kullanici phone bolumune veri girmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@hotelcreate"
    },
    {
      "name": "@hotelcreatenegativetest4"
    },
    {
      "name": "@aysoltanhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate code bolumune \"XYZ345\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate name bolumune \"Hilton\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate adress bolumune \"Berlin\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_adress_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate email bolumune \"hiltonberlin@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate idgroup bolumunde \"Hotel Type1\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_idgroup_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate kayit islemini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_kayit_islemini_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_05 kullanici e-mail bolumune veri girmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@hotelcreate"
    },
    {
      "name": "@hotelcreatenegativetest5"
    },
    {
      "name": "@aysoltanhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate code bolumune \"XYZ345\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate name bolumune \"Hilton\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate adress bolumune \"Berlin\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_adress_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate phone bolumune \"0539123456\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate idgroup bolumunde \"Hotel Type1\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_idgroup_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate kayit islemini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_kayit_islemini_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_06 kullanici idgroup dan secim yapmaz",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@hotelcreate"
    },
    {
      "name": "@hotelcreatenegativetest6"
    },
    {
      "name": "@aysoltanhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate code bolumune \"XYZ345\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate name bolumune \"Hilton\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate adress bolumune \"Berlin\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_adress_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate phone bolumune \"0539123456\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate email bolumune \"hiltonberlin@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotelcreate kayit islemini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelcreate_kayit_islemini_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC11_kullanici bilgileri girerek room reservation olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@hotelreservationcreate,@meltemhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici hotelroomreservation sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_hotelroomreservation_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation iduser bolumunde \"manager2\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_iduser_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation idhotelroom bolumunde \"Hilton\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_idhotelroom_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation price bolumune \"500\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_price_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation datestart bolumune \"10/10/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_datestart_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation dateend bolumune \"10/17/2020\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_dateend_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation adultamaount bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_adultamaount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation childrenamount bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_childrenamount_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation namesurname bolumune \"Hamza Yılmaz\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_namesurname_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation phone bolumune \"0500600700\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_phone_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation email bolumune \"hamza@gmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_email_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation notes bolumune \"Testerlardan selam..\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_notes_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici roomreservation kayit islemini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_roomreservation_kayit_islemini_assert_eder()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".bootbox\\-body\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7BM0IB0\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\onurn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57764}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 48c11622dcda0c430b89336191a7f632\n*** Element info: {Using\u003dclass name, value\u003dbootbox-body}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat stepdefinitions.KoalaStepDef.kullanici_roomreservation_kayit_islemini_assert_eder(KoalaStepDef.java:421)\r\n\tat ✽.kullanici roomreservation kayit islemini assert eder(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:321)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_koalapalace_hotelroomcreate"
    },
    {
      "name": "@hotelcreate1"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate1"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate2"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate3"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput id\u003d\"btnSubmit\" type\u003d\"submit\" value\u003d\"Log in\" class\u003d\"btn btn-primary py-3 px-5\"\u003e is not clickable at point (148, 608). Other element would receive the click: \u003cdiv id\u003d\"ftco-loader\" class\u003d\"fullscreen\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7BM0IB0\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\onurn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57879}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e72e3bff6777e78013cbc7bcba611ae2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor4.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir(KoalaStepDef.java:35)\r\n\tat ✽.kullanici giris islemini gerceklestirir(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate4"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to \u0027normal\u0027, current state is \u0027maximized\u0027\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7BM0IB0\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\onurn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57879}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e72e3bff6777e78013cbc7bcba611ae2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat utilities.Driver.getDriver(Driver.java:52)\r\n\tat stepdefinitions.Hooks.tearDown(Hooks.java:19)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate5"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate6"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate7"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate8"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate9"
    },
    {
      "name": "@team06_hotelroomcreate_hatali_veri"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"2023 2023\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici \"Fill All Fields Please\" uyari mesaji aldigini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_uyari_mesaji_aldigini_assert_eder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate10"
    },
    {
      "name": "@team06_hotelroomcreate_hatali_veri"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"786\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici \"Fill All Fields Please\" uyari mesaji aldigini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_uyari_mesaji_aldigini_assert_eder(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".bootbox\\-body\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7BM0IB0\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\onurn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58010}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: fe4a5d77a3548cfa3fc9c69b0be1d8d8\n*** Element info: {Using\u003dclass name, value\u003dbootbox-body}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat stepdefinitions.KoalaStepDef.team06_kullanici_uyari_mesaji_aldigini_assert_eder(KoalaStepDef.java:511)\r\n\tat ✽.team06_kullanici \"Fill All Fields Please\" uyari mesaji aldigini assert eder(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:482)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC08_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate11"
    },
    {
      "name": "@team06_hotelroomcreate_hatali_veri"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat \"Pahali\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici \"Fill All Fields Please\" uyari mesaji aldigini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_uyari_mesaji_aldigini_assert_eder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate12"
    },
    {
      "name": "@team06_hotelroomcreate_hatali_veri"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"HS\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici \"Fill All Fields Please\" uyari mesaji aldigini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_uyari_mesaji_aldigini_assert_eder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@Salihbey"
    },
    {
      "name": "@team06_hotelroomcreate13"
    },
    {
      "name": "@team06_hotelroomcreate_hatali_veri"
    },
    {
      "name": "@hotelcreate1"
    }
  ]
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate idhotel bolumunde \"Star\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate code bolumune \"4900\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate name bolumune \"Boni Garcia\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_name_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate location bolumune \"Langenthal\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_location_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate description bolumune \"Ah Techproed Ah!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_description_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate price bolumune fiyat girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate roomtype bolumunde \"Double\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxadult bolumune \"2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate maxchildren bolumune \"HS\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici hotelroomcreate save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_hotelroomcreate_save_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "team06_kullanici \"Fill All Fields Please\" uyari mesaji aldigini assert eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.team06_kullanici_uyari_mesaji_aldigini_assert_eder(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".bootbox\\-body\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7BM0IB0\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\onurn\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58087}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: db1a1df6b798a392f8bdc510f6e598d3\n*** Element info: {Using\u003dclass name, value\u003dbootbox-body}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat stepdefinitions.KoalaStepDef.team06_kullanici_uyari_mesaji_aldigini_assert_eder(KoalaStepDef.java:511)\r\n\tat ✽.team06_kullanici \"Fill All Fields Please\" uyari mesaji aldigini assert eder(file:///C:/Users/onurn/IdeaProjects/KoalaTeam6/src/test/resources/features/koalapalace.feature:527)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_kullanici IdUser-1 kismini secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@IDUser1"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_kullanici IdUser-2 kismini secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@IDUser2"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_kullanici Price kismini secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@Price"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC04_kullanici AdultAmont kismini secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@AdultAmont"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici ChildAmont kismini secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@ChildAmont"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_kullanici ContactName kismini secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@ContactName"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC07_kullanici ContactPhone kismi secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@ContactPhone"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC08_kullanici Notes kismi secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@Email"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC09_kullanici Notes kismi secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@Notes"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC10_kullanici Aproved kismi secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@Aproved"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC11_kullanici Is kismi secmez",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@roomrezarvasyonu"
    },
    {
      "name": "@emre"
    },
    {
      "name": "@IsPaid"
    }
  ]
});
formatter.step({
  "name": "kullanici addroom kismina click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_addroom_kismina_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici birinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_birinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ikinci IDUser kismini dropdown ile secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ikinci_IDUser_kismini_dropdown_ile_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici price kismini secer ve value yollar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_price_kismini_secer_ve_value_yollar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris tarihini secer ve yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_tarihini_secer_ve_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici cikis tarihini secer ve girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_cikis_tarihini_secer_ve_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici AdultAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_AdultAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ChildAmont kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ChildAmont_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactNameSurname kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactNameSurname_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ContactPhone kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_ContactPhone_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Contact Email kismini secer ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Contact_Email_kismini_secer_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Notes kismini secev ve value gonderir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Notes_kismini_secev_ve_value_gonderir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Aproved kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Aproved_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici IsPaid kismini click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_IsPaid_kismini_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Save butonuna click yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Save_butonuna_click_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici accept sonucunu ekranda gormemeli",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_accept_sonucunu_ekranda_gormemeli()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_kullanici username yanlis giris yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@loginpagetest"
    },
    {
      "name": "@loginpagenegativetest1"
    },
    {
      "name": "@sengulhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici login sayfasinda deneme yapar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_deneme_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login sayfasinda username bolumunde \"manager\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_username_bolumunde_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login sayfasinda password bolumunde \"Man1ager2!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_password_bolumunde_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris isleminin basarisiz oldugunu verify eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_isleminin_basarisiz_oldugunu_verify_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_kullanici password yanlis giris yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@loginpagetest"
    },
    {
      "name": "@loginpagenegativetest2"
    },
    {
      "name": "@sengulhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici login sayfasinda deneme yapar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_deneme_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login sayfasinda username bolumunde \"manager2\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_username_bolumunde_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login sayfasinda password bolumunde \"Man1ager!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_password_bolumunde_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris isleminin basarisiz oldugunu verify eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_isleminin_basarisiz_oldugunu_verify_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_kullanici username ve password yanlis giris yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@loginpagetest"
    },
    {
      "name": "@loginpagenegativetest3"
    },
    {
      "name": "@sengulhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici login sayfasinda deneme yapar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_deneme_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login sayfasinda username bolumunde \"manager\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_username_bolumunde_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login sayfasinda password bolumunde \"Man1ager!\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_password_bolumunde_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris isleminin basarisiz oldugunu verify eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_isleminin_basarisiz_oldugunu_verify_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_kullanici username ve password bos giris yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@loginpagetest"
    },
    {
      "name": "@loginpagenegativetest4"
    },
    {
      "name": "@sengulhanim"
    }
  ]
});
formatter.step({
  "name": "kullanici login sayfasinda deneme yapar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_sayfasinda_deneme_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici login butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_login_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici username is required mesajini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_username_is_required_mesajini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici password is required mesajini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_password_is_required_mesajini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_Koalapalace Hotel List goruntuleme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@umutbey"
    },
    {
      "name": "@hotelmanagement"
    },
    {
      "name": "@testcase_01"
    }
  ]
});
formatter.step({
  "name": "kullanici Hotel Manangment sekmesine tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Hotel_Manangment_sekmesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Hotel List butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Hotel_List_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici LIST OF HOTELS yazisini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_LIST_OF_HOTELS_yazisini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_Koalapalace Hotel Rooms goruntuleme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@umutbey"
    },
    {
      "name": "@hotelmanagement"
    },
    {
      "name": "@testcase_02"
    }
  ]
});
formatter.step({
  "name": "kullanici Hotel Manangment sekmesine tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Hotel_Manangment_sekmesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Hotel Rooms butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Hotel_Rooms_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici LIST OF ROOMS yazisini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_LIST_OF_ROOMS_yazisini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://www.kaolapalace-qa-environment2.com/Account/LogOn?ReturnUrl\u003d%2FAdmin%2FUserAdmin\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_Koalapalace Hotel Rooms goruntuleme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@team6"
    },
    {
      "name": "@umutbey"
    },
    {
      "name": "@hotelmanagement"
    },
    {
      "name": "@testcase_03"
    }
  ]
});
formatter.step({
  "name": "kullanici Hotel Manangment sekmesine tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Hotel_Manangment_sekmesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Room reservations butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_Room_reservations_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici LIST OF RESERVATIONS yazisini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaStepDef.kullanici_LIST_OF_RESERVATIONS_yazisini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});