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
});