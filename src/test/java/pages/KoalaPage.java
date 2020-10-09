package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class KoalaPage {
    public KoalaPage(){
        PageFactory.initElements(Driver.getDriver() , this);
    }
//ONUR BEY
    @FindBy(id = "UserName")
    public WebElement userNameKutusu;
    @FindBy(id = "Password")
    public WebElement passwordKutusu;
    @FindBy(id = "btnSubmit")
    public WebElement girisButonu;
    //========================================
    @FindBy(id = "IDUser")
    public WebElement roomReservationIDUser1;
    @FindBy(id = "IDHotelRoom")
    public WebElement roomReservationIDUser2;
    @FindBy(id = "Price")
    public WebElement roomReservationPrice;
    @FindBy(id = "DateStart")
    public WebElement roomReservationDateStart;
    @FindBy(id = "DateEnd")
    public WebElement roomReservationDateEnd;
    @FindBy(id = "AdultAmount")
    public WebElement roomReservationAdultAmount;
    @FindBy(id = "ChildrenAmount")
    public WebElement roomReservationChildrenAmount;
    @FindBy(id = "ContactNameSurname")
    public WebElement roomReservationContactNameSurname;
    @FindBy(id = "ContactPhone")
    public WebElement roomReservationContactPhone;
    @FindBy(id = "ContactEmail")
    public WebElement roomReservationContactEmail;
    @FindBy(id = "Notes")
    public WebElement roomReservationNotes;
    @FindBy(id = "btnSubmit")
    public WebElement roomReservationSaveButonu;
    @FindBy(className = "bootbox-body")
    public WebElement roomReservationBasariliYazisi;
    @FindBy(xpath = "//label[@class='error']")
    public List<WebElement> hataMesaji;


//HAKAN BEY
    @FindBy (xpath = "/html/body/section[1]/div[1]/div/div[3]/div/div[2]/div/div/div/h1")
    public WebElement welcomeYazisi;
    @FindBy( xpath = "//*[contains(text(), 'Log in')]")
    public WebElement loginButonu;
    @FindBy(id = "UserName")
    public  WebElement kullaniciAdi;
    @FindBy ( id = "Password" )
    public WebElement sifre;
    @FindBy(id = "btnSubmit")
    public WebElement girisButonu1;
    @FindBy (xpath = "//*[@class='caption-subject font-green-sharp bold uppercase']")
    public WebElement listofuserYazisi;


//AYSOLTAN HANIM
    //Hotel Create with Invalid Credentials Aysoltan
    @FindBy( id = "UserName")
    public WebElement userNameKutusu3;
    @FindBy ( id = "Password" )
    public WebElement passwordKutusu3;
    @FindBy ( xpath = "//button[.='Log in']")
    public WebElement girisButonu3;
    @FindBy ( id = "Code")
    public WebElement hotelCreateCodeKutusu;
    @FindBy ( id = "Name")
    public WebElement hotelCreateNameKutusu;
    @FindBy ( id = "Address")
    public WebElement hotelCreateAddressKutusu;
    @FindBy ( id = "Phone")
    public WebElement hotelCreatePhoneKutusu;
    @FindBy (id = "Email")
    public WebElement hotelCreateEmailKutusu;
    @FindBy (id = "IDGroup")
    public WebElement hotelCreateIDGroupDropdown;
    @FindBy (id = "btnSubmit")
    public WebElement hotelCreateSaveButonu;
    @FindBy (className = "bootbox-body")
    public WebElement hotelCreateBasariliYazisi;
    @FindBy (xpath ="//label[@class='error']")
    public WebElement hotelCreateUariYazisi;



//MELTEM HANIM

    @FindBy ( id = "IDUser" )
    public WebElement hotelRoomReservationCreateIDUserDropdown;
    @FindBy ( id = "IDHotelRoom")
    public WebElement hotelRoomReservationCreateIDHotelRoomDropdown ;
    @FindBy ( id = "Price")
    public WebElement hotelRoomReservationCreatePriceKutusu ;
    @FindBy ( id = "DateStart")
    public WebElement hotelRoomReservationCreateDateStartKutusu ;
    @FindBy ( id = "DateEnd")
    public WebElement hotelRoomReservationCreateDateEndKutusu ;
    @FindBy ( id = "AdultAmount")
    public WebElement hotelRoomReservationCreateAdultAmountKutusu ;
    @FindBy ( id = "ChildrenAmount")
    public WebElement hotelRoomReservationCreateChildrenAmountKutusu ;
    @FindBy ( id = "ContactNameSurname")
    public WebElement hotelRoomReservationCreateNameSurnameKutusu ;
    @FindBy ( id = "ContactPhone")
    public WebElement hotelRoomReservationCreatePhoneKutusu ;
    @FindBy ( id = "ContactEmail")
    public WebElement hotelRoomReservationCreateEmailKutusu ;
    @FindBy ( id = "Notes")
    public WebElement hotelRoomReservationCreateNotesKutusu ;
    @FindBy ( id = "btnSubmit")
    public WebElement hotelRoomReservationCreateSaveButonu ;
    @FindBy ( className = "bootbox-body")
    public WebElement hotelRoomReservationCreateBasariliYazisi;
    @FindBy ( xpath = "//label[@class='error']")
    public WebElement hataMesaji4;       //Bu kismin step'teki karsiligini bulamadim




//SALIH BEY

    @FindBy ( id = "UserName")
    public WebElement userNameKutusu2;
    @FindBy ( id = "Password" )
    public WebElement passwordKutusu2;
    @FindBy ( xpath = "//button[.='Log in']")
    public WebElement girisButonu2;
    @FindBy ( id = "IDHotel" )
    public WebElement hotelRoomCreateIDHotelDropdown ;
    @FindBy ( id = "Code" )
    public WebElement hotelRoomCreateCodeKutusu ;
    @FindBy ( id = "Name" )
    public WebElement hotelRoomCreateNameKutusu ;
    @FindBy ( id = "Location" )
    public WebElement hotelRoomCreateLocationKutusu ;
    @FindBy ( xpath = "//*[@id='cke_1_contents']/textarea")
    public WebElement hotelRoomCreateDescriptionKutusu ;
    @FindBy ( id = "Price" )
    public WebElement hotelRoomCreatePriceKutusu ;
    @FindBy ( xpath = "//*[@data-id='500']/a")
    public WebElement hotelRoomCreatePrice500 ;
    @FindBy ( id = "IDGroupRoomType" )
    public WebElement hotelRoomCreateIDGroupRoomTypeDropDown;
    @FindBy ( id = "MaxAdultCount" )
    public WebElement hotelRoomCreateMaxAdultKutusu;
    @FindBy ( id = "MaxChildCount" )
    public WebElement hotelRoomCreateMaxChildKutusu;
    @FindBy ( id = "btnSubmit" )
    public WebElement hotelRoomCreateSaveButonu ;
    @FindBy ( className = "bootbox-body")
    public WebElement hotelRoomCreateBasariliYazisi;
    //<div class="bootbox-body">HotelRoom was inserted successfully</div>
    //<div class="bootbox-body">Fill All Fields Please</div>
    @FindBy ( className = "error")
    public WebElement hotelRoomCreatelUyariYazisi;
    @FindBy ( className = "bootbox-body")
    public WebElement uyariMesaji3;
//xpath = "//*[text()='Fill All Fields Please']"


//EMRULLAH

    @FindBy (id="UserName")
    public WebElement username;
    @FindBy(id="Password")
    public WebElement pass;
    @FindBy(xpath = "//button[@type='submit']")
    public WebElement button;
    @FindBy(xpath = "//*[text()='Add Room Reservation ']")
    public WebElement room;
    @FindBy(id="IDUser")
    public WebElement iDUser;
    @FindBy(id="IDHotelRoom")
    public WebElement iDHotelRoom;
    @FindBy (id="Price")
    public WebElement price;
    @FindBy(id="AdultAmount")
    public WebElement adult;
    @FindBy(id="ChildrenAmount")
    public WebElement child;
    @FindBy(id="ContactNameSurname")
    public WebElement contactName;
    @FindBy(id="ContactPhone")
    public WebElement contactPhone;
    @FindBy(id="ContactEmail")
    public WebElement email;
    @FindBy(id="Notes")
    public  WebElement note;
    @FindBy (id="Approved")
    public WebElement approved;
    @FindBy(id="IsPaid")
    public WebElement isPaid;
    @FindBy(id="btnSubmit")
    public WebElement save;
    @FindBy (id="DateStart")
    public WebElement girisTarih;
    @FindBy(id="DateEnd")
    public WebElement cikisTarih;


//SENGUL HANIM
@FindBy( id = "UserName")
public WebElement userNameKutusu4;
    @FindBy ( id = "Password" )
    public WebElement passwordKutusu4;
    @FindBy ( xpath = "//button[.='Log in']")
    public WebElement girisButonu4;
    @FindBy ( css = ".validation-summary-errors>span")
    public WebElement hataMesaji5;
    @FindBy (xpath = "//span[@for='UserName']")
    public WebElement userNameBlankMessage;
    @FindBy (xpath = "//span[@for='Password']")
    public WebElement passwordBlankMessage;

}



