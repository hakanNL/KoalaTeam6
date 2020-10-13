package runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin   ={"html:target/default-cucumber-reports",
                   "json:target/json-reports/cucumber.json",
                   "junit:target/xml-report/cucumber.xml"},
        features = "src/test/resources/features",
        glue  = "stepdefinitions",
        tags   = "@team6",
        //tags   = "@onurbey ",//        @roomreservationdates",
        //tags   = "@hakanbey         @koalapalaceLogin",
        //tags   =  "@aysoltanhanim ", "@hotelcreate",
        //tags   = "@meltemhanim,     @hotelreservationcreate
        //tags   = "@Salihbey,        @hotelcreate1",
        //tags   = "@emre,            @roomrezarvasyonu",
        // tags   = "@sengulhanim" , // @loginpagetest",
        // tags   = "@aysoltanhanim ",
        //tags   = "@umutbey" ,        //@hotelmanagement ",
        dryRun   =  false
)
public class Runner {
}
