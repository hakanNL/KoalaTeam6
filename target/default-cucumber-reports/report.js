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
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
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
