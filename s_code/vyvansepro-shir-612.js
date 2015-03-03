// App Measurement 1.4 basic code reqs
// this file must contain a defined s_account for app meas code to run as well.
// Must contain s = new AppMeasurement();
// Shir-612 vyvansepro.com adhd and bed
// Include s.account=s_account in the Additional Configuration box within the SiteCatalyst Pageload Tag Attributes
s = new AppMeasurement();

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="ISO-8859-1"
/* Conversion Config */
s.currencyCode="USD"
/* Link Tracking Config */
s.trackDownloadLinks=false
s.trackExternalLinks=false
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
s.linkInternalFilters="javascript:,vyvansepro.com"
s.linkLeaveQueryString=false
s.linkTrackVars=""
s.linkTrackEvents="";
/* GetActionDepth */
//s.ActionDepthTest=true;
s.cookieDomain=document.location.hostname;
s.cookiePath="/";



s.usePlugins=true
function s_doPlugins(s) {
    
        //Referring URL
    s.fRef=document.referrer.toLowerCase();
    s.fRef=s.fRef.replace('http://','').replace('www.','').replace('https://','').replace(/\?.+/, '').replace(/^\/|\/$/g, '');
    //Filtered URL for match
    s.scFiltersUrl = document.domain + "/" + location.pathname.split('/')[1] + "/";
    s.scFiltersUrl=s.scFiltersUrl.replace('www.','').toLowerCase();
    s.scFiltersDomain= document.domain.replace('www.','');
    s.scRefTrim=document.referrer.toLowerCase().replace(/(\/\/[^\/]+)?\/.*/, '$1').replace('http://','').replace('www.','').replace('https://','').replace(/\?.+/, '').replace(/^\/|\/$/g, '');
/* Add calls to plugins here */
var scURL=document.location.pathname;
var sc_URL=document.location.pathname.toLowerCase();
//Set Site Vertical-Name
    if(scURL.indexOf('/adhd/') >-1){
        s.prop1='adhd';
        s.eVar55=s.prop1;
        }
    else if(scURL.indexOf('/binge-eating-disorder/') >-1){
        s.prop1='bed';
        s.eVar55=s.prop1;
        }
    else{
        s.prop1="franchise";
        s.eVar55=s.prop1;
    }
    s.eVar45='vyvansepro';
    s.eVar50='hcp';
//Configure Page Names
var parts = window.location.href.replace(".html","").replace("index","").replace("default.aspx","").replace("Default.aspx","").replace('#','').split("/"),
    total = parts.length,
    count = 0,
    s_pageName = "",
    urlPath = document.URL.toLowerCase();

if(document.location.pathname == "/" || document.location.pathname == "/index.html"){
  s.pageName =  s.prop1 + ' > ' + ' > ' + "global" + ' > ' + "home".toLowerCase();
}
else if(parts[3] != "" && parts[4] !="" && parts[5] !="" && parts[3] != "undefined" && parts[4] !="undefined" && parts[5] !="undefined"){
    s.pageName =  parts[3] +'|'+ parts[4] +"|"+ parts[5];
    s.channel =  s.prop1 +'|'+ parts[3];
}
//parts
else if(parts[3] != "" && parts[4] !="" && parts[3] != "undefined" && parts[4] !="undefined"){
    s.pageName = parts[3] + '|' + parts[4];
    s.channel =  s.prop1 + '|' + parts[3];
}
//Hcc&Hcp  Sub
else if(parts[3] != "" && parts[3] !="undefined" ){
 s.pageName = parts[3];
 s.channel = s.prop1;
}
if(parts[3]=='binge-eating-disorder' && parts[4]!="" && parts[4]!="undefined" && parts[5]!="" && parts[5]!="undefined"){
    s.pageName='bed|'+parts[4]+"|"+parts[5];
    s.channel=parts[3];
}
if(parts[3]!='binge-eating-disorder' && parts[3]!='adhd'){
    s.pageName="franchise|"+s.pageName;
}

if(typeof(s.prop1)!="undefined" && typeof(scCat)!="undefined"){
s.prop2=s.prop1 + scCat;
}
if(sc_URL=='/'||sc_URL == "/default.aspx"){
    s.pageName=s.prop1+"|"+"home page";
    s.channel =  s.prop1;
    }
if(s.pageName){s.pageName=s.pageName.replace(/-/g,' ').toLowerCase();}
if(s.channel){s.channel=s.channel.replace(/-/g,' ').toLowerCase();}
if(scURL=="/binge-eating-disorder/"){s.pageName="bed|home page";}
if(scURL=="/adhd/"){s.pageName="adhd|home page";}
if(sc_URL=='/adhd/default.aspx'){s.pageName='adhd|home page';}
if(s.pageName=='savings'){s.pageName='savings offer';}
if(s.pageName.indexOf('binge eating disorder|')>-1){s.pageName=s.pageName.replace('binge eating disorder','bed');}
if(s.pageName=='binge eating disorder'){s.pageName=s.pageName="bed|home page";}

    /** Visitor identification variables begin **/
    s.eVar1= s.c_r('s_vi') ? s.c_r('s_vi').match(/\|([^[]+)/) ? s.c_r('s_vi').match(/\|([^[]+)/)[1] : "Unexpected Format" : "D=vidn";
    /** Visitor identification variables end **/
    //Get Previous Page Name
    s.prop4=s.getPreviousValue(!!s.pageName ? s.pageName : !!s.pageType ? s.channel+" > Error Page" : '', 's_gpv_pn', '');
    
    //Traffic Source Entry Page
    if (!!s.eVar4)
        s.prop5 = s.eVar4 + " : " + s.pageName; // Traffic Source Entry Page
    else
        s.prop5    = s.pageName; // Traffic Source Entry Page gets all page names for pathing purposes
    //Get Visit Number
    s.prop6=s.getVisitNum();
    
    //Get Days Since Last Visit
    s.prop7=s.getDaysSinceLastVisit('sc_hcp_daysLastTouch');
    //Get Time Parting
    s.prop8=s.getTimeParting('h','-5');
    s.prop9=s.getTimeParting('d','-5');
    //s.prop4=s.getTimeParting('w','-5');
    
    //Get New vs Repeat Visitor
    s.prop12=s.eVar35=s.getNewRepeat(30,'s_gnr');
    
    /*Percent Page Viewed*/
    if(s.prop4){s.prop44=s.getPercentPageViewed();}
    
    //Set Query Parameters into correct variable
    if(!s.eVar25)s.eVar25=s.Util.getQueryParam('utm_source');
    if(!s.eVar26)s.eVar26=s.Util.getQueryParam('utm_campaign');
    if(!s.eVar27)s.eVar27=s.Util.getQueryParam('utm_content');
    if(!s.eVar28)s.eVar28=s.Util.getQueryParam('utm_term');
    if(!s.eVar29)s.eVar29=s.Util.getQueryParam('utm_creative');
    
    //Setup Link Track Plugin
    s.hbx_lt = "auto"
    s.setupLinkTrack(",,prop51,prop52", "SC_LINKS");





    //TODO: Cristi, this is your note --> change cookie name for multiple
    s.prop7         = s.getDaysSinceLastVisit('sc_hcp_daysLastTouch');


    //29 Form Complete
    if(s.pageName.indexOf('savings|thank you')>-1 || s.pageName.indexOf('vyvansepro resource|thank you')>-1 || s.pageName.indexOf('unsubscribe|confirmation')>-1){
        if(localStorage['scFormStart']=='vyvpro resource registration'){
            s.eVar30='vyvpro resource registration';
            s.events='event2';
            s.prop30="D=v30";
            localStorage.removeItem('scFormStart');
        }
        else if(localStorage['scFormStart']=='savings offer'){
            s.eVar30='savings offer';
            s.events='event2';
            s.prop30="D=v30";
            localStorage.removeItem('scFormStart');
        }
        else if(localStorage['scFormStart']=='unsubscribe'){
            s.eVar30='unsubscribe';
            s.events='event2';
            s.prop30="D=v30";
            localStorage.removeItem('scFormStart');
        }
    }


    /* start - channel manager */

    //TODO: Build internal referrer logic

    /*
        s.channelManager(a,b,c,d,e,f,g)
        a = Campaign/Channel Identifiers.
        b = deprecated
        c = (s_cm) The cookie name that is used to enable the getValOnce check
        d = ('') Uncompress search engine list.
        e = (s_cmtb) Typed/Bookmarked cookie name
        f = (30) Typed/Bookmarked non-override duration (in days)
        g = (optional) Exclude internal tracking codes. When set to '1', campaign tracking codes are ignored if the referrer is flagged as internal.

        eVar4: Channel Manager Last Touch (CMLT) Channel, most recent (last) allocation, expires after 30 days (or the campaign variable equivalent)
        eVar72: CMLT Details, most recent (last) allocation, expires after 30 days (or the campaign variable equivalent)
        eVar73: Channel Manager First Touch Channel, original (first) allocation, expires after 30 days. Set in Adobe Analytics as first value.
        eVar74: CMFT Details, original (first) allocation, expires after 30 days. Set in Adobe Analytics as first value.
    */

    s.channelManager('utm_medium,utm_source,utm_campaign,utm_content,utm_term,utm_creative','','s_cm','','s_cmtb','30');

    if(s._channel){
        //set to lowercase
        s._campaignID = s._campaignID.toLowerCase(); //campaign code found in the URL parameter passed into channelManager
        s._channel = s._channel.toLowerCase(); //name of the determined channel
        s._keywords = s._keywords.toLowerCase(); //search engine keywords
        s._partner = s._partner.toLowerCase(); //search engine title. Configured in s.seList and s._extraSearchEngines
        s._referrer - s._referrer.toLowerCase(); //referring URL
        s._referringDomain = s._referringDomain.toLowerCase(); //referring URL's domain
        s.pageName = s.pageName.toLowerCase();
        //trim down the email referring domains
        s.mailRef=s._referringDomain.indexOf('.mail.')
        if(s.mailRef>-1)
            s._referringDomain=s._referringDomain.substring(s.mailRef+1);
        //Array of marketing channel query string parameters. Array keys are eVar numbers.
        var campaignParams = [];
        campaignParams[4] = s.Util.getQueryParam('utm_medium').toLowerCase();
        campaignParams[25] = s.Util.getQueryParam('utm_source').toLowerCase();
        campaignParams[26] = s.Util.getQueryParam('utm_campaign').toLowerCase();
        campaignParams[27] = s.Util.getQueryParam('utm_content').toLowerCase();
        campaignParams[28] = s.Util.getQueryParam('utm_term').toLowerCase();
        campaignParams[29] = s.Util.getQueryParam('utm_creative').toLowerCase();
        //Populate marketing channel eVars and build campaign variable
        s.campaign = "";
        for (var key in campaignParams) {
            if (campaignParams.hasOwnProperty(key)) {
              if (!!campaignParams[key]) {
                s['eVar'+key] = campaignParams[key];
                s.campaign += campaignParams[key]+"|";
              } else if (!!campaignParams[4] || !!campaignParams[25] || !!campaignParams[26] || !!campaignParams[27] || !!campaignParams[28] || !!campaignParams[29]) {
                s['eVar'+key] = "undefined";
                s.campaign += "undefined|";
              } else {
                s.campaign += "undefined|";
              }
            }
        }
        //Cut off trailing "|"
        s.campaign = s.campaign.substring(0, s.campaign.length - 1);
        // Default values for all channels
        //********
        //legacy code
        s.eVar7 = s.eVar8 = s.eVar42 = s.eVar44 = "other channel";
        //set CMFT Channel to eVar4. eVar73 is set in Adobe Analytics as first value.
        s.eVar73 = s.eVar4;
        //Set the channel detail variables
        switch(s._channel){
            case 'unknown paid channel':
                //override s._channel default of "Unkown Paid Channel" with utm_medium if present
                //********
                //legacy code sets the else value to s.campaign
                s.eVar4 = s._channel = !!s.eVar4 ? s.eVar4 : s.campaign;
                break;
            case 'paid search':
                //override s._channel value with utm_medium if present
                s.eVar4 = s._channel = !!s.eVar4 ? s.eVar4 : s.campaign;
                //paid search keyword
                s.eVar7 = s.eVar28 = !!s.eVar28 ? s.eVar28 : s._keywords; //set eVar7 to s._keywords if there is no utm_term
                //search engine
                s.eVar44 = s.eVar25 = !!s.eVar25 ? s.eVar25 : s._partner; //set eVar44 to s._partner if there is no utm_source
                //set marketing channel first and last touch details
                s.eVar72 = s.eVar74 = s.eVar4 + '|' + s.eVar44 + '|' + s.eVar7;
                break;
            case 'natural search':
                //tracking code
                s.campaign = 'seo|' + s._partner;
                //marketing channel
                s.eVar4 = s.eVar73 = s._channel = "seo"; //set CMLT & CMFT Channel
                //********
                //legacy code set utm_parameters, excluding utm_term, to utm_medium
                s.eVar25 = s.eVar26 = s.eVar27 = s.eVar29 = "D=v4";
                //seo keyword
                //********
                //legacy code set utm_term to s._keyword
                s.eVar8 = s.eVar28 = s._keywords;
                //search engine
                s.eVar44 = s._partner;
                //set channel marketing details
                s.eVar72 = s.eVar74 = 'seo|' + s._partner + '|' + s._keywords; //set CMLT & CMFT Details
                break;
            case 'other natural referrers':
                //tracking code
                s.campaign = 'referrer|' + s._referringDomain;
                //marketing channel first and last touch
                s.eVar4 = s.eVar73 = s._channel = 'referrer';
                //********
                //legacy code set all utm eVars to utm_medium)
                s.eVar25 = s.eVar26 = s.eVar27 = s.eVar28 = s.eVar29 = "D=v4";
                //referrers (30 days) non-search natural referrers
                s.eVar42 = s._referringDomain;
                //set channel marketing details (first and last touch)
                s.eVar72=s.eVar74='referrer|'+s._referringDomain;
                break;
            case 'typed/bookmarked':
                //tracking code
                s.campaign = s.eVar4 = s.eVar73 = s._channel = 'direct'; //set CMLT & CMFT Channel
                //set channel marketing details
                s.eVar72 = s.eVar74 = 'direct|' + s.pageName; //set CMLT & CMFT Details
                //********
                //legacy code set all utm eVars to utm_medium)
                s.eVar25 = s.eVar26 = s.eVar27 = s.eVar28 = s.eVar29 = "D=v4";
                break;
            default:
                s.eVar4 = s.eVar73 = s._channel;
                //set marketing channel details to concatenated utm_parameter values (s._campaignID)
                s.eVar72 = !!s._campaignID ? s._channel + '|' + s._campaignID : s._channel + '|' + s._referringDomain;
                s.eVar74 = s.eVar72;
        }
    }
    /* end - channel manager */

    // FICO Tracking Codes
    s.eVar18        = s.Util.getQueryParam('tc');
    s.eVar6         = s.Util.getQueryParam('mid');   // Shire-only
        //Traffic Source Entry Page
    if (!!s.eVar4){
        s.prop5 = s.eVar4 + " : " + s.pageName; // Traffic Source Entry Page
        // Set Marketing Channel Entry URL eVar and pageName
        s.eVar9     = "D=pageName";
        s.eVar48    = "D=g";
    }
    else {
        s.prop5    = s.pageName; // Traffic Source Entry Page gets all page names for pathing purposes
    }
    //Get Previous Page Name
    s.prop4=s.getPreviousValue(!!s.pageName ? s.pageName : !!s.pageType ? s.channel+" > Error Page" : '', 's_gpv_pn', '');

    if(s.prop3)s.prop3=s.prop3.replace(/-/g, " ");
    if(s.pageName.indexOf('?')>-1){
        s.pageName=s.pageName.replace(/\?.+/, '');
        }
    if(s.pageName){
        s.pageName=s.pageName.replace('#', '');
    }
    /*Percent Page Viewed*/
    if(s.prop4){s.prop44=s.getPercentPageViewed();}
    //Internal Filters and Referrals
    s.scInternal=".hablemosadhd.com,.ulcerative-colitis-central.com,.everydayhealth.com/ownyouradhd,.adhdproductresourcecenter.com,.youtube.com/user/ownyouradhd,.digitashealth.com,.activatepharmacycard.com,.shireadhdscholarship.com,.vyvansesavingscard.com,.intuniv.com,.facebook.com/adhdhub,.adhdactionguide.com,.fosrenolontrack.com,.lialdaucsupport.com,.adhdandyou.com/hcp,.adhduniversity.com,.justaskaboutuc.com,.vyvansesavings.com,.shireprograms.com,.ownitproject.com,.vyvanseadult.com,.vyvanseteens.com,.adhdroadmap.com,.vyvansekids.com,.udotherest.com,.lialda.com,.lialdapro.com,.pentasaus.com,.ucopinion.com,.intuniv.com,.fosrenol.com,.vyvanse.com,.shire.com,.shireregistration.com,.theydotherest.com,.keepmomming.com,.vyvanse.com,.bingeeatingdisorder.com";
    //if(s.fRef.length >0){
    if(typeof(s.scRefTrim)!='undefined' && s.scRefTrim.length>0){
        if(s.scRefTrim!=s.scFiltersDomain && s.scInternal.indexOf(s.scRefTrim)>-1){
            //console.log(s.scInternal);
            s.eVar4=s.eVar73=s.channel='internal referrer';
            s.campaign='internalreferrer|'+s.scRefTrim;
            //s.campaign = s.campaign.substring(0, s.campaign.length - 1);
            s.eVar72=s.eVar74='internalreferrer|'+s.scRefTrim;
            s.prop42=s.eVar42="D=r";
        }
        else if(s.scRefTrim!=s.scFiltersDomain && s.scInternal.indexOf(s.scRefTrim)==-1){
            s.prop42=s.eVar42="D=r";
        }
    }
    var lastChar = s.pageName.substr(-1);
    if(lastChar=='|'){
        s.pageName=s.pageName.substring(0, s.pageName.length - 1);
    }
    if(s.pageName)s.pageName=s.pageName.replace(/%2d/g, "");
 }
s.doPlugins=s_doPlugins
var scURL=document.location.pathname;
//Set Site Vertical-Name
    if(scURL.indexOf('/adhd/') >-1){
        s.prop1='adhd';
        }
    else if(scURL.indexOf('/binge-eating-disorder/') >-1){
        s.prop1='bed';
        }
    else{s.prop1="franchise";}
    s.eVar45='vyvansepro';
    s.eVar50='hcp';
//Configure Page Names
var parts = window.location.href.replace(".html","").replace("index","").replace("default.aspx","").replace('#','').split("/"),
    total = parts.length,
    count = 0,
    s_pageName = "",
    urlPath = document.URL.toLowerCase();

if(document.location.pathname == "/" || document.location.pathname == "/index.html"){
  s.pageName =  s.prop1 + ' > ' + ' > ' + "global" + ' > ' + "home".toLowerCase();

}
else if(parts[3] != "" && parts[4] !="" && parts[5] !="" && parts[3] != "undefined" && parts[4] !="undefined" && parts[5] !="undefined"){
    s.pageName =  parts[3] +'|'+ parts[4] +"|"+ parts[5];
    s.channel =  s.prop1 +'|'+ parts[3];
}
//Hcc&Hcp Home
else if(parts[3] != "" && parts[4] !="" && parts[3] != "undefined" && parts[4] !="undefined"){
    s.pageName =  parts[3] + '|' + parts[4];
    s.channel =  s.prop1 + '|' + parts[3];
}
//Hcc&Hcp  Sub
else if(parts[3] != "" && parts[3] !="undefined" ){
 s.pageName =  parts[3];
 s.channel =  s.prop1;
}
if(parts[3]=='binge-eating-disorder' && parts[4]!="" && parts[4]!="undefined" && parts[5]!="" && parts[5]!="undefined"){
    s.pageName=parts[4]+"|"+parts[5];
    s.channel=parts[3];
}
if(parts[3]!='binge-eating-disorder' && parts[3]!='adhd'){
    s.pageName="franchise|"+s.pageName;
}

if(typeof(s.prop1)!="undefined" && typeof(scCat)!="undefined"){
s.prop2=s.prop1 + scCat;
}
if(document.location.pathname=='/'||document.location.pathname == "/default.aspx"){
    s.pageName=s.prop1+" home page";
    s.channel =  s.prop1;
    }

if(s.pageName){s.pageName=s.pageName.replace(/-/g,' ').toLowerCase();}
if(s.channel){s.channel=s.channel.replace(/-/g,' ').toLowerCase();}
if(document.location.pathname=="/binge-eating-disorder/"){s.pageName="bed home page"}
if(s.pageName=='savings'){s.pageName='franchise|savings offer';}

    /** Visit behavior variables begin **/
    s.visitPageNum=getVisitPageViews();
    // On the first page of the visit...
    if (s.visitPageNum == 1) {
        s.eVar14=s.prop6; // Set Visit Number eVar
    }
    //TODO: Discuss with analysts first, and then remove the report names from prop10 and prop11
    s.prop10 = "Visit Page View: " + s.visitPageNum;
    s.prop11 = "Lifetime Page Views: " + getLifetimePageViews();

    //Set pageName to prop14 and eVar46
    s.prop14=s.eVar46="D=pageName";
    s.prop41=s.eVar47="D=g";
    s.eVar45="D=c1";
//Onclick code for custom click and other events - begin
scLinkCustVars="prop1,prop2,prop4,prop5,prop6,prop7,prop8,prop9,prop10,prop11,prop12,prop14,prop24,prop41,eVar45,eVar46,eVar47";

//7-1 to 7-5
$('section.top_row li').on('click',function(){
    var scVal=$(this).find('a').attr('id');
    if(typeof scVal!=="undefined"){
        if(scVal.indexOf('EvokeHyperLink2')>-1){
            scFVal='nav_view adhd callout_global header'
            s.eVar22=scFVal;
            s.events=s.linkTrackEvents='';
            s.linkTrackVars="eVar22"+','+scLinkCustVars;
            s.tl(this,'o',scFVal);
        }
        else if(scVal.indexOf('EvokeHyperLink3')>-1){
            scFVal='nav_view bed callout_global header';
            s.eVar22=scFVal;
            s.events=s.linkTrackEvents='';
            s.linkTrackVars="eVar22"+','+scLinkCustVars;
            s.tl(this,'o',scFVal);
        }
        // else if(scVal.indexOf('EvokeHyperLink4')>-1){
        //     scFVal='download_prescribing info1';
        //     s.eVar20=scFVal;
        //     s.events=s.linkTrackEvents='event4';
        //     s.linkTrackVars="eVar20,events"+','+scLinkCustVars;
        //     s.tl(this,'d',scFVal);
        // }
        // else if(scVal.indexOf('EvokeHyperLink1')>-1){
        //     scFVal='download_medication guide';
        //     s.eVar20=scFVal;
        //     s.events=s.linkTrackEvents='event4';
        //     s.linkTrackVars="eVar20,events"+','+scLinkCustVars;
        //     s.tl(this,'d',scFVal);
        // }
    }
    else if(!scVal){
        scVal=$(this).find('a').attr('href');
        if(scVal.indexOf('vyvanse.com')>-1){
            scFVal='internal site exit_vyvanse.com';
            s.eVar21=scFVal;
            s.linkTrackVars="eVar21"+','+scLinkCustVars;
            s.events=s.linkTrackEvents='';
            s.tl(this,'e',scFVal);
        }
    }
})
//Mobile 7-1 and 7-2
$('div.slide_menu a[href="/adhd/"],div.slide_menu a[href="/binge-eating-disorder/"]').on('click',function(){
    var scLink=$(this).attr('href');
    if(typeof(scLink)!='undefined'){
        if(scLink=="/binge-eating-disorder/"){
            scFVal='nav_view bed callout_global header'
        }
        else if(scLink=="/adhd/"){
            scFVal='nav_view adhd callout_global header'
        }
        s.eVar22=scFVal;
        s.events=s.linkTrackEvents='';
        s.linkTrackVars="eVar22"+','+scLinkCustVars;
        s.tl(this,'o',scFVal);
   }
})

//8-1 8-2 Download Prescribing Info paragraph
$('a[href*="pi.shirecontent"]').on('click',function(){
    s.eVar20='download_prescribing info';
    s.linkTrackVars="events,eVar20"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event4';
    s.tl(this,'d',s.eVar20);
})
//8-3
$('a[href*="medguide.shirecontent"]').on('click',function(){
    s.eVar20='download_medication guide';
    s.linkTrackVars="events,eVar20"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event4';
    s.tl(this,'d',s.eVar20);
})
//8-4
$('a[href="http://www.shire.com/shireplc/en/home"]').on('click',function(){
    s.eVar21='internal site exit_shire us';
    s.linkTrackVars="events,eVar21"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'e',s.eVar21);
})
//8-5
$('a[href="http://www.shirecares.com"]').on('click',function(){
    s.eVar21='internal site exit_shire cares';
    s.linkTrackVars="events,eVar21"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'e',s.eVar21);
})
//9-1
$('a.hero[href="/adhd/"]').on('click',function(){
    s.eVar22='nav_vyv for adhd brandbox interaction_global header';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//9-2
$('a.hero.last[href="/binge-eating-disorder/"]').on('click',function(){
    s.eVar22='nav_vyv for bed brandbox interaction_global header';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//9-3
// $('select#ddlState').one('click',function(){
//     s.eVar22='nav_formulary tool interaction';
//     s.linkTrackVars="events,eVar22,prop30,eVar30"+','+scLinkCustVars;
//     s.events=s.linkTrackEvents='event39';
//     s.prop30='formulary coverage';
//     s.eVar30='D=c30';
//     s.tl(this,'o',s.prop30+"_touched");
//     $('select#ddlState').on('click',function(){
//         s.linkTrackVars="eVar22"+','+scLinkCustVars;
//         s.events=s.linkTrackEvents='';
//         s.eVar22='nav_formulary tool interaction';
//         s.tl(this,'o',s.eVar22);
//     })
// })
//9-4
//9-5
if(!!localStorage['forTool']){
    localStorage.removeItem('forTool');
}
$('select#ddlState').on('blur',function(){
    s.events=s.linkTrackEvents='event3';
    if(!localStorage['forTool']){
        s.events=s.linkTrackEvents='event3,event39';
        localStorage['forTool']='start';
    }
    s.eVar34='step 1_select state';
    s.prop30='formulary coverage';
    s.eVar30='D=c30';
    s.linkTrackVars="eVar34,eVar30,prop30,events"+','+scLinkCustVars;
    s.tl(this,'o',s.prop30+'_interaction');
})
//9-6
$('select#ddlCoverage').on('blur',function(){
    //var e = document.getElementById("ddlState");
    //var strUser = e.options[e.selectedIndex].value;
    s.events=s.linkTrackEvents='event3';
    if(!localStorage['forTool']){
        s.events=s.linkTrackEvents='event39,event3';
        localStorage['forTool']='start';
    }
    s.eVar34='step 2_select coverage type';
    s.prop30='formulary coverage';
    s.eVar30='D=c30';
    s.linkTrackVars="eVar34,eVar30,prop30,events"+','+scLinkCustVars;
    s.tl(this,'o',s.prop30+'_interaction');
})
//9-7
$('select#ddlProviders').on('click',function(){
    //var e = document.getElementById("ddlState");
    //var strUser = e.options[e.selectedIndex].value;
    s.eVar34='step 3_select health plan type';
    s.prop30='formulary coverage';
    s.linkTrackVars="eVar34,eVar30,prop30,events"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event3';
    s.tl(this,'o',s.prop30+'_interaction');
})
//9-8 reg link not right rail
$('div.franchise-callouts a[href*=".com/vyvansepro-resource/"]').on('click',function(){
    s.eVar22='nav_reg for updates';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//9-9 reg link not right rail
$('div.franchise-callouts a[href*=".com/savings/"]').on('click',function(){
    s.eVar22='nav_reg for savings';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//9-10 reg link not right rail
$('div.franchise-callouts a[href*="/health-care-payers/"]').on('click',function(){
    s.eVar22='nav_health care payers';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//9-11 reg link not right rail
$('div.franchise-callouts a[href*="/prescription-coverage/"]').on('click',function(){
    s.eVar22='nav_prescript coverage';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//9-12 reg link not right rail
$('div.franchise-callouts a[href*="/health-plan-benefits/"]').on('click',function(){
    s.eVar22='nav_health plan benefits';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//9-13 reg link not right rail
$('div.franchise-callouts a[href*="/affordable-care-act/"]').on('click',function(){
    s.eVar22='nav_affordable care act';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//10-1 All right rail clicks
$('section#franchiseNav a').on('click',function(){
    var scForTool=$(this).closest("li").attr('class');
    s.eVar22='nav_'+scForTool+' right rail call out';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//Mobile 10-1
$('li.gradient a').on('click',function(){
    var scLink=$(this).text();
    if(typeof(scLink!='undefined')){
            scLink=scLink.toLowerCase();
            console.log(scLink);
            if(scLink=="formulary coverage"){scFVal="formulary";}
            else if(scLink=="access & affordability"){scFVal="access";}
            else if(scLink=="vyvansepro registration"){scFVal="register";}
            else if(scLink=="savings offer"){scFVal="savings";}
            s.eVar22='nav_'+scFVal+' right rail call out';
            s.linkTrackVars="eVar22"+','+scLinkCustVars;
            s.events=s.linkTrackEvents='';
            s.tl(this,'o',s.eVar22);
        }
})
//13-5
$('div.details a[href="/formulary-coverage/"]').on('click',function(){
    s.eVar22='nav_formulary contextual call out';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})

//15-5
$('div.details a[href="/binge-eating-disorder/about-bed/"].btn').on('click',function(){
    s.eVar22='nav_bed overview call out';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//15-6
$('div.details a[href="/binge-eating-disorder/about-bed/screening/"].btn').on('click',function(){
    s.eVar22='nav_bed screening call out';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//15-7
$('div.details a[href="/binge-eating-disorder/clinical-data/"].btn').on('click',function(){
    s.eVar22='nav_clinical results call out';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//16-5
$('div.recognize-callout a[href="/binge-eating-disorder/about-bed/recognizing-bed/"]').on('click',function(){
    s.eVar22='nav_recognize bed in patients call out';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//18-5
$('div.recognize-callout.diagnosed a[href="/binge-eating-disorder/about-bed/screening/"]').on('click',function(){
    s.eVar22='nav_learn to better screen call out';
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//19-5
$('div.recognize-callout.discussion a').on('click',function(){
    s.eVar20='download_physician discussion guide pdf';
    s.linkTrackVars="events,eVar20"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event4';
    s.tl(this,'d',s.eVar20);
})
//19-6
$('div.recognize-callout.diagnosed.screening a').on('click',function(){
    s.eVar20='download_bed screener pdf';
    s.linkTrackVars="eVar20"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event4';
    s.tl(this,'o',s.eVar20);
})
//23-5,24-1,25-1
$('div.tabs div.wrapper li a').on('click',function(){
    var scTab=$(this).data('tab-content');
    if(scTab=="patients"){scTab="your patients";}
    else if(scTab=="coordinators"){scTab="reimbursement";}
    s.eVar22='nav_tab for '+scTab;
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//23-6
$('div.description a[href*="/vyvansepro-resource/"]').on('click',function(){
    s.eVar22='nav_register for bed info call out'
    s.linkTrackVars="eVar22"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'o',s.eVar22);
})
//Video Handler Functions 
function videoPlayHandler(val1){
    s.linkTrackVars='events,eVar23,prop23'+','+scLinkCustVars;
    s.linkTrackEvents=s.events='event5';
    var val2='_start';
    var val3=val1.replace(' > ','_').toLowerCase();
    if(val3=='video_monicaseles story')val3='video_monica seles story';
    s.eVar23=val3;
    s.prop23="D=v23";
    s.tl(this,'o','video'+val2)
}

function videoMilestoneHandler(val1,val4){
    var vidEvent=""
    if(val4==25)vidEvent='event34';
    else if(val4==50)vidEvent='event35';
    else if(val4==75)vidEvent='event36';
    s.linkTrackVars='events,eVar23,prop23'+','+scLinkCustVars;
    s.linkTrackEvents=s.events=vidEvent;
    var val3=val1.replace(' > ','_').toLowerCase();
    if(val3=='video_monicaseles story')val3='video_monica seles story';
    s.eVar23=val3;
    s.prop23='D=v23';
    s.tl(this,'o','video_'+val4+'% milestone reached')
}

function videoCompleteHandler(val1){
    s.linkTrackVars='events,eVar23,prop23'+','+scLinkCustVars;
    s.linkTrackEvents=s.events='event37';
    //var val3=val1.replace(' > ','_').toLowerCase();
    var val2='_complete';
    s.eVar23=val3;
    s.prop23="D=v23";
    s.tl(this,'o','video'+val2)
}

//23-7
$('div.box div.description a.link').on('click',function(){
    var scLink=$(this).text().toLowerCase();
    var scLVal='';
    var scLFVal='';
    if(typeof(scLink)!="undefined"){
        if(scLink=='download'){
            scLFVal=$(this).closest('.description').find('h4').text();
            scLVal=$(this).attr('href');
            if(!!scLVal && !!scLFVal){
                if(scLVal=="/documents/Adult-Binge-Eating-Disorder-Patient-Screener.pdf"){scLVal="bed screener pdf";}
                else if(scLVal=="/documents/Discussion-Guide-for-Adult-Patients-with-Binge-Eating-Disorder.pdf"){scLVal="physician discussion guide pdf";}
                else(scLVal=scLFVal);
            }
        s.linkTrackVars="eVar20,events"+','+scLinkCustVars;
        s.linkTrackEvents=s.events='event4';
        s.eVar20='download_'+scLVal;
        if(s.eVar20){s.eVar20=s.eVar20.toLowerCase();}
        s.tl(this,'d',"download_"+scLVal);
        }
    }
})

//24-1
$('div.recognize-callout.diagnosed.screening a').on('click',function(){
    s.eVar20='download_bed screener pdf';
    s.linkTrackVars="eVar20"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event4';
    s.tl(this,'d',s.eVar20);
})
//25-2
if(s.pageName=="bed|bed resource center"){
    $('div.box div.description').on('click',function(){
        var scHead=$(this).closest(".description").find('h4').text();
        if(scHead.indexOf('Adults Brochure')>-1){
            s.eVar20='download_vyvanse for binge eating disorder brochure';
            s.linkTrackVars="events,eVar20"+','+scLinkCustVars;
            s.events=s.linkTrackEvents='event4';
            s.tl(this,'d',s.eVar20);
        }
    })
}



//25-3
$('div.box div.description a.link[href="http://www.shire.com/shireplc/en/patient-support"]').on('click',function(){
    s.eVar21='internal site exit_shire cares';
    s.linkTrackVars="eVar21"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'e',s.eVar21);
})
//25-4
$('a.cont').on('click',function(){
    var scLink=$(this).attr('href');
    var scFLink="";
    if(scLink.indexOf('allianceforeatingdisorders')>-1){scFLink="alliance for eating disorder awareness";}
    else if(scLink.indexOf('ama-assn.org/ama')>-1){scFLink="american medical association";}
    else if(scLink.indexOf('psychiatry.org')>-1){scFLink="american psychiatric association";}
    else if(scLink.indexOf('apa.org')>-1){scFLink="american psychological association";}
    else if(scLink.indexOf('bedaonline.com')>-1){scFLink="binge eating disorder association";}
    else if(scLink.indexOf('nami.org')>-1){scFLink="national alliance for mental illness";}
    else if(scLink.indexOf('nationaleatingdisorders.org')>-1){scFLink="national eating disorders association";}
    else{

    }
    s.eVar21="external site exit_"+scFLink;
    s.linkTrackVars="eVar21"+','+scLinkCustVars;
    s.events=s.linkTrackEvents="";
    if(s.eVar21)s.eVar21=s.eVar21.toLowerCase();
    s.tl(this,'e',s.eVar21);
})



//29-5
$('p.body b a[href*="vyvansesavings.com"]').on('click',function(){
    s.eVar21='internal site exit_vyvanse savings';
    s.linkTrackVars="eVar21"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='';
    s.tl(this,'e',s.eVar21);
})
//29-6 Savings Form
$('div.form-wrapper-inner').one('click',function(){
    if(s.pageName.indexOf('vyvansepro resource')>-1){
        s.eVar30='vyvpro resource registration';
    }
    else if(s.pageName=='franchise|savings'){
        s.eVar30='savings offer';
    }
    s.prop30="D=v30";
    s.linkTrackVars="events,eVar30,prop30"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event39';
    localStorage['scFormStart']=s.eVar30;
    s.tl(this,'o',s.eVar30+'_start');
})
//29-6 form field populated - text fields
$('input[type="text"]').on('blur',function(){
    if(s.pageName.indexOf('vyvansepro resource')>-1){
        s.eVar30='vyvpro resource registration';
    }
    else if(s.pageName.indexOf('savings offer')>-1){
        s.eVar30='savings offer';
    }
    else if(s.pageName.indexOf('unsubscribe')>-1){
        s.eVar30='unsubscribe';
    }
    var scFVal=$(this).attr('placeholder');
    if(typeof(scFVal)=="undefined"){
        var scFFVal=$(this).attr('id');
        console.log(scFFVal);
        if(scFFVal.indexOf('tbEmail')>-1){var scFinal='email';}
        else if(scFFVal.indexOf('tbFirstName')>-1){var scFinal='first name';}
        else if(scFFVal.indexOf('tbLastName')>-1){var scFinal='last name';}
        else if(scFFVal.indexOf('ConfirmEmail')>-1){var scFinal='reenter email';}
        else if(scFFVal.indexOf('tbAddress1')>-1){var scFinal='address1';}
        else if(scFFVal.indexOf('tbAddress2')>-1){var scFinal='suite';}
        else if(scFFVal.indexOf('tbCity')>-1){var scFinal='city';}
        else if(scFFVal.indexOf('tbZip')>-1){var scFinal='zip';}
        else if(scFFVal.indexOf('tbMENumber')>-1){var scFinal='me number';}
        s.eVar34=scFinal;
    }
    else{
    s.eVar34=scFVal;
    }
    //if(s.eVar34)s.eVar34=s.eVar30+'|'+s.eVar34;
    if(s.eVar34)s.eVar34=s.eVar34.toLowerCase();
    s.prop30="D=v30";
    s.linkTrackVars="events,eVar30,prop30,eVar34"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event3';
    localStorage['scFormStart']=s.eVar30;
    s.tl(this,'o',s.eVar30+'_'+s.eVar34);
})
//29-6 form field populated - dropdowns
$('select[id*="ddlState"], select[id*="ddlSpecialty"], select[id*="Patient"], select[id*="ddlInformation"]').on('blur',function(){
    var scFName="";
    var scFVal="";
    var scFName="";
    if(s.pageName.indexOf('vyvansepro resource')>-1){
        scFName='vyvpro resource registration';
        scFVal=$(this).attr('id');
        SCFormTrack(scFName,scFVal);
    }
    else if(s.pageName=="franchise|savings"){
        scFName='savings offer';
        scFVal=$(this).attr('id');
        SCFormTrack(scFName,scFVal);
    }
})
function SCFormTrack(scFName,scFVal){
    s.eVar30=scFName;
    var scDd=scFVal;
    if(scDd.indexOf('ddlState')>-1){s.eVar34='state';}
    else if(scDd.indexOf('ddlSpecialty')>-1){s.eVar34='profession';}
    else if(scDd.indexOf('ddlPatient')>-1){s.eVar34='patients condition';}
    else if(scDd.indexOf('ddlInformation')>-1){s.eVar34='receive info about';}
    if(s.eVar34)s.eVar34=s.eVar34.toLowerCase();
    s.prop30="D=v30";
    s.linkTrackVars="events,eVar30,prop30,eVar34"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event3';
    localStorage['scFormStart']=s.eVar30;
    s.tl(this,'o',s.eVar30+'_'+s.eVar34);
}
//29-20 opt-in
$('input[type="checkbox"]').on('click',function(){
    if(s.pageName.indexOf('vyvansepro resource')>-1){
        s.eVar30='vyvpro resource registration';
    }
    else if(s.pageName.indexOf('savings offer')>-1){
        s.eVar30='savings offer';
    }
    s.eVar34='opt in check box';
    s.prop30="D=v30";
    s.linkTrackVars="events,eVar30,prop30,eVar34"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event3';
    localStorage['scFormStart']=s.eVar30;
    s.tl(this,'o',s.eVar30+'_'+s.eVar34);
})
//29-21 opt-in
$('div.submit').on('click',function(){
    if(s.pageName.indexOf('vyvansepro resource')>-1){
        s.eVar30='vyvpro resource registration';
    }
    else if(s.pageName.indexOf('savings offer')>-1){
        s.eVar30='savings offer';
    }
    s.eVar34='submit';
    s.prop30="D=v30";
    s.linkTrackVars="events,pageName,eVar30,prop30,eVar34"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event3';
    localStorage['scFormStart']=s.eVar30;
    s.tl(this,'o',s.eVar30+'_'+s.eVar34);
})
//Unsubscribe Form Start
$('div#unsubForm').one('click',function(){
    s.eVar30='unsubscribe';
    s.prop30="D=v30";
    s.linkTrackVars="events,pageName,eVar30,prop30"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event39';
    s.tl(this,'o',s.eVar30+'_started');
})

//29 form complete in do plugins so event2 will set
//30-5
if(s.pageName.indexOf('savings|thank you')>-1){
    $('a[id*="btnDownload"]').on('click',function(){
        s.eVar20='download_savings offer coupon pdf';
        s.linkTrackVars='events,eVar20'+','+scLinkCustVars;
        s.events=s.linkTrackEvents='event4';
        s.tl(this,'d',s.eVar20);
    })
}
//Onclick code for custom click and other events - end
//scott start
/** Referrer logic begin **/
s.internalDomains = s.linkInternalFilters.split(',');
/* Sort s.internalDomains from lengest values to shortest so addabilify.com matches before abilify.com
All sites should redirect from non-www to www. Raise the issue with an Encima project manager if they don't.
This takes a long time to execute so I've sorted the list and saved it into BrightTag so it doesn't have to be sorted here.
Keeping this code here so I don't have to find it online when I want to sort a list later.
s.internalDomains.sort(function(a, b) {
  return b.length - a.length;
});
*/
// s.thisDomain                = getDomainWithoutWWWorM(location.toString());
// if (document.referrer) {
//     s.referrer              = document.referrer.toLowerCase();
//     s.referrerFullDomain    = getFullDomain(s.referrer);
//     s.referrerDomain        = getDomainWithoutWWWorM(s.referrer);
//     s.isSameDomain          = s.referrerDomain == s.thisDomain ? true : false;
//     s.refPath               = s.referrer.toLowerCase().match(/(?:.com\/)(hcp|teens|kids)(?:\b|\/)/);
//     s.refPath               = s.refPath && s.refPath.length > 1 ? s.refPath[1].toString().replace('/','') : false;
//     s.sitePath              = location.pathname.toLowerCase().match(/(hcp|teens|kids)(?:\b|\/)/);
//     s.sitePath              = s.sitePath && s.sitePath.length > 1 ? s.sitePath[1].toString().replace('/','') : false;
//     if (!s.isSameDomain || s.refPath != s.sitePath) {
//         // If the referrer is not a partner site
//         if (s.linkInternalFilters.indexOf(s.referrerDomain) == -1) {
//             // Set last-touch referrer variables
//             s.prop37 = s.referrerDomain;
//             s.eVar37 = "D=c37";
//             s.prop38 = "D=r";
//             s.eVar38 = "D=r";
//         }
//         else if (s.thisDomain != "shireregistration.com" || !s.Util.getQueryParam('s_vi') && !s.Util.getQueryParam('s_fid')) { // If either s_vi or s_fid is in the URL, then this site tracks as part of the calling site
//             // Referrer is a partner site. Determine which one it is and set Internal Referrer marketing channel.
//             for (var i = 0; i < s.internalDomains.length; i++) {
//                 if (s.referrerFullDomain.indexOf(s.internalDomains[i]) > -1 && !!s.Util.getValOnce(s.referrerDomain+'/'+s.refPath+"Internal Referrer", 's_cm', 1/48)) {
//                     // The getValOnce call in the if statement above updates channelManager's cookie with this new channel.
//                     // If this is the same channel the user entered through last time this code block does not execute and s._channel is empty.
//                     s.eVar3 = !!s.refPath ? s.referrerFullDomain+"/"+s.refPath : s.referrerFullDomain; // Internal site referral
//                     // Set marketing channel variables. channelManager will not run if referrer is in linkInternalReferrers.
//                     s._channel = s.eVar4 = "Internal Referrer";
//                     s.eVar25 = s.eVar26 = s.eVar27 = s.eVar28 = s.eVar29 = s.prop37 = s.eVar37 = s.prop38 = s.eVar38 = "D=v4";
//                     s.campaign = s.eVar13 = s.prop5 = "Internal Referrer: " + s.eVar3; // campaign undefined : undefined
//                     s.eVar5 = s.stackKeepFirst(s.eVar4, 's_eVar5', ' > ', '5', '1825');
//                     s.eVar7 = s.eVar8 = s.eVar42 = s.eVar44 = "Other Channel";
//                     s.eVar9 = "D=pageName";
//                     s.eVar48 = "D=g";
//                     break;
//                 }
//             }
//         }
//     }
//     s.prop42 = "D=r";
// }
/** Referrer logic end **/

function getFullDomain(str) {
    var re = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im');
    if (str.match(re) != null)
        return str.match(re)[1].toString();
    else
        return false;
}

function getDomainWithoutWWWorM(str) {
    var re = new RegExp('^(?:f|ht)tp(?:s)?\://(?:www.)?(?:m.)?([^/]+)', 'im');
    if (str.match(re) != null)
        return str.match(re)[1].toString();
    else
        return false;
}
//scott end
/**********SiteCatalyst Utility Plugins Compatible with both H27.4 and App Measurement 1.4  -begin *****/

/* p_gh Utility Function required in all implementations */
s.p_gh=new Function("",""
+"var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o"
+"),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o"
+"=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot"
+"(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';");

/* Utility Function: p_c */
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");

/* Join Utility Function required in all implementations */
s.join=new Function("v","p",""
+"var s=this,f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d="
+"p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.l"
+"ength;x++){if(typeof(v[x])=='object')str+=s.join(v[x],p);else str+="
+"w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/* s.repl - Replace Utility Function required for several plugins */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x"
+".substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/* Utility Function: split v1.5 - split a string (JS 1.0 compatible) */
// used in multiple instances
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* Plugin Utility: apl append to list v1.1 */
// used with internal search and adding events to the existing list of events being set
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/**********Non SiteCatalyst Plugins***********/
function setCookie(c_name, value, exdays, exminutes) {
    var exdate = new Date();
    if (exdays > 0)
        exdate.setDate(exdate.getDate() + exdays);
    else
        exdate.setTime(exdate.getTime() + (exminutes * 60 * 1000));
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString()) + ";domain=" + s.cookieDomain + ";path=" + s.cookiePath;;
    document.cookie = c_name + "=" + c_value;
}
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
    return false;
}

(function ($) {
 
/**
* @function
* @property {object} jQuery plugin which runs handler function once specified element is inserted into the DOM
* @param {function} handler A function to execute at the time when the element is inserted
* @param {bool} shouldRunHandlerOnce Optional: if true, handler is unbound after its first invocation
* @example $(selector).waitUntilExists(function);
*/
 
$.fn.waitUntilExists    = function (handler, shouldRunHandlerOnce, isChild) {
    var found    = 'found';
    var $this   = $(this.selector);
    var $elements   = $this.not(function () { return $(this).data(found); }).each(handler).data(found, true);
    
    if (!isChild)
    {
        (window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] =
            window.setInterval(function () { $this.waitUntilExists(handler, shouldRunHandlerOnce, true); }, 500)
        ;
    }
    else if (shouldRunHandlerOnce && $elements.length)
    {
        window.clearInterval(window.waitUntilExists_Intervals[this.selector]);
    }
    
    return $this;
}
}(jQuery));

function scFormCov(){
    s.eVar30="formulary coverage";
    s.prop30="D=v30";
    s.linkTrackVars="events,eVar30,prop30"+','+scLinkCustVars;
    s.events=s.linkTrackEvents='event2';
    s.tl(this,'o','formulary coverage|complete');
}
$('span#formularyResultsZip').waitUntilExists(scFormCov);


/** Get Page Views count per Visit, increments the count and overwrites the same cookie extending the expiration by 30 minutes **/
function getVisitPageViews() {
    var pagesVisit = getCookie('sc_hcp_pgVwVst') ? getCookie('sc_hcp_pgVwVst') : 0;
    pagesVisit++;
    setCookie('sc_hcp_pgVwVst', pagesVisit, 0, 1800); // 1800 seconds, 30 minutes
    return pagesVisit;
}
/** Get Page Views count for lifetime, increments the count and overwrites the same cookie extending the expiration by 1825 days (5 years) **/
function getLifetimePageViews() {
    var pagesLifetime = getCookie('sc_hcp_pgVwLftm') ? getCookie('sc_hcp_pgVwLftm') : 0;
    pagesLifetime++;
    setCookie('sc_hcp_pgVwLftm', pagesLifetime, 1825, 0);
    return pagesLifetime;
}

/**********SiteCatalyst Utility Plugins Compatible with both H27.4 and App Measurement 1.4  -end *****/

/**********SiteCatalyst Plugins for basically all sites**********/


/* Plugin: getPreviousValue_v1.0 - return previous value of designated */
//variable (requires split utility)
// used for Search Origination Pages
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/* SiteCatalyst Plugin: getTimeParting 2.0 */
s.getTimeParting=new Function("t","z","y","l",""
+"var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
+"tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
+".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
+"|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z"
+"=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
+"g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
+"=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
+"a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
+" Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
+"etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
+"nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
+"Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
+"00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6"
+"||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab"
+"le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r"
+"eturn A}}else{return Z+', '+W}}}");

/* Plugin: getValOnce_v1.1 */
// used with internal and external campaigns
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

/* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Plugin: Visit Number By Month 2.0 - Return the user visit number
 */
s.getVisitNum = new Function("var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else return 'unknown visit number';}else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}");

/*
 * Plugin: Days since last Visit 1.1 - capture time from last visit
 */
s.getDaysSinceLastVisit = new Function("c", "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;");

/*
 * Plugin: getPercentPageViewed v1.71
 */
s.getPercentPageViewed=new Function("n",""
+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
+"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
+"rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
+".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
+"ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split("
+"',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;"
+"a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]="
+"!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';"
+"if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va"
+"r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|"
+"|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid"
+"th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|"
+"|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs"
+"tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s"
+"_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H"
+"s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i"
+"nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round("
+"C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p"
+"=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180"
+":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,"
+"v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!="
+"N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i"
+"Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'"
+":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+"
+"','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x"
+"+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s"
+"_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E."
+"length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v"
+"ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");

/* channelManager v2.85AM - Tracking External Traffic */
s.channelManager=new Function("a","b","c","d","e","f","g",""
+"var s=this,h=new Date,i=0,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E"
+",F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;h.setTime(h.getTime()+1800000);if(e)"
+"{i=1;if(s.c_r(e))i=0;if(!s.c_w(e,1,h))s.c_w(e,1,0);if(!s.c_r(e))i=0"
+";if(f&&s.c_r('s_tbm'+f))i=0;}j=s.referrer?s.referrer:document.refer"
+"rer;j=unescape(j.toLowerCase());if(!j)k=1;else {l=j.indexOf('?')>-1"
+"?j.indexOf('?'):j.length;m=j.substring(0,l);n=s.split(j,'/');n=s.sp"
+"lit(n[2],'?');o=n[0].toLowerCase();p=s.linkInternalFilters.toLowerC"
+"ase();p=s.split(p,',');for(q=0;q<p.length;q++){r=o.indexOf(p[q])==-"
+"1?'':j;if(r)break;}}if(!r&&!k){t=j;u=v=o;w='Other Natural Referrers"
+"';x=s.seList+'>'+s._extraSearchEngines;if(d==1){m=s.replace(m,'oogl"
+"e','%');m=s.replace(m,'ahoo','^');j=s.replace(j,'as_q','*');}y=s.sp"
+"lit(x,'>');for(z=0;z<y.length;z++){A=y[z];A=s.split(A,'|');B=s.spli"
+"t(A[0],',');for(C=0;C<B.length;C++){D=m.indexOf(B[C]);if(D>-1){if(A"
+"[2])E=v=A[2];else E=o;if(d==1){E=s.replace(E,'#',' - ');j=s.replace"
+"(j,'*','as_q');E=s.replace(E,'^','ahoo');E=s.replace(E,'%','oogle')"
+";}F=s.split(A[1],',');for(G=0;G<F.length;G++){if(j.indexOf(F[G]+'='"
+")>-1||j.indexOf('https://www.google.')==0||j.indexOf('http://r.sear"
+"ch.yahoo.com')==0)H=1;I=s.Util.getQueryParam(F[G],j).toLowerCase();"
+"if(H||I)break;}}if(H||I)break;}if(H||I)break;}}if(!r||g!='1'){J=s.s"
+"plit(a,',');K=0;while(!T&&K<J.length){T=s.Util.getQueryParam(J[K],'"
+"',b);K++;}if(T){v=T;if(E)w='Paid Search';else w='Unknown Paid Chann"
+"el';}if(!T&&E&&H){v=E;w='Natural Search';}}if(i&&k&&!T)t=u=v=w='Typ"
+"ed/Bookmarked';J=s._channelDomain;if(J&&o&&!r){K=s.split(J,'>');for"
+"(L=0;L<K.length;L++){M=s.split(K[L],'|');N=s.split(M[1],',');O=N.le"
+"ngth;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=o.indexOf(Q);if(R>-1){"
+"w=M[0];break;}}if(R>-1)break;}}J=s._channelParameter;if(J){K=s.spli"
+"t(J,'>');for(L=0;L<K.length;L++){M=s.split(K[L],'|');N=s.split(M[1]"
+",',');O=N.length;for(P=0;P<O;P++){R=s.Util.getQueryParam(N[P]);if(R"
+"){w=M[0];break;}}if(R)break;}}J=s._channelPattern;if(J){K=s.split(J"
+",'>');for(L=0;L<K.length;L++){M=s.split(K[L],'|');N=s.split(M[1],',"
+"');O=N.length;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=T.toLowerCase"
+"();S=R.indexOf(Q);if(S==0){w=M[0];break;}}if(S==0)break;}}S=w?T+u+w"
+"+I:'';c=c?c:'c_m';if(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaign"
+"ID=T?T:'n/a';s._referrer=t?t:'n/a';s._referringDomain=u?u:'n/a';s._"
+"campaign=v?v:'n/a';s._channel=w?w:'n/a';s._partner=E?E:'n/a';s._key"
+"words=H?I?I:'Keyword Unavailable':'n/a';if(f&&w!='Typed/Bookmarked'"
+"){h.setTime(h.getTime()+f*86400000);s.c_w('s_tbm'+f,1,h);}}else s._"
+"campaignID=s._referrer=s._referringDomain=s._campaign=s._channel=s."
+"_partner=s._keywords='';");
/* Top 130 - Grouped */
s.seList="google.,googlesyndication.com,.googleadservices.com|q,as_q|"
+"Google>bing.com|q|Bing>yahoo.com,yahoo.co.jp|p,va|Yahoo!>ask.jp,ask"
+".co|q,ask|Ask>.aol.,suche.aolsvc.de|q,query|AOL>altavista.co,altavi"
+"sta.de|q,r|AltaVista>.mywebsearch.com|searchfor|MyWebSearch>webcraw"
+"ler.com|q|WebCrawler>wow.com|q|Wow>infospace.com|q|InfoSpace>blekko"
+".com|q|Blekko>dogpile.com|q|DogPile>alhea.com|q|Alhea>goduckgo.com|"
+"q|GoDuckGo>info.com|qkw|Info.com>contenko.com|q|Contenko>www.baidu."
+"com|wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq>myway."
+"com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>nets"
+"cape.com|query,search|Netscape Search>reference.com|q|Reference.com"
+">seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.c"
+"o.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Yandex.r"
+"u>optimum.net|q|Optimum Search";




/********** SiteCat Plugins for specific sites -begin ***********/

/*
 * Plugin: downloadLinkHandler 0.8 - identify and report download links
 */
// s.downloadLinkHandler=new Function("p","e",""
// +"var s=this,o=s.p_gh(),h=o.href,n='linkDownloadFileTypes',i,t;if(!h|"
// +"|(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n"
// +"]=p?p:t;if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return e?o:"
// +"h;");

/*
 * Plugin: exitLinkHandler 0.8 - identify and report exit links
 */
// s.exitLinkHandler=new Function("p","e",""
// +"var s=this,o=s.p_gh(),h=o.href,n='linkInternalFilters',i,t;if(!h||("
// +"s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n]="
// +"p?p:t;h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=="
// +"'e')s.linkType='e';else h='';s[n]=t;return e?o:h;");

 
/* Plugin: setupLinkTrack v3.02AM */
s.setupLinkTrack=new Function("vl","c","e",""
+"var cv=s.c_r(c);if(vl){var vla=vl.split(',');}if(cv!=''){var cva=s."
+"split(cv,'^^');if(cva[1]!=''){for(x in vla){s[vla[x]]=cva[x];if(e){"
+"s.events=s.apl(s.events,e,',',2);}}}}s.c_w(c,'',0);if(typeof s.link"
+"Object!='undefined'&&s.hbx_lt!='manual'){s.lta=[];if(typeof s.pageN"
+"ame!='undefined')s.lta[0]=s.pageName;if(typeof s.linkObject!=null){"
+"slo=s.linkObject;if(s.linkObject!=0){if(s.linkObject.getAttribute('"
+"name')!=null){var b=s.linkObject.getAttribute('name');if(b.indexOf("
+"'&lpos=')>-1){s.lta[3]=b.match('\&lpos\=([^\&]*)')[1];}if(b.indexOf"
+"('&lid=')>-1){s.lta[1]=b.match('\&lid\=([^\&]*)')[1];}}}if(typeof s"
+".lta[1]=='undefined'){if(s.linkName!=0){s.lta[1]=s.linkName;}else i"
+"f(s.linkObject!=0){if(s.linkObject.innerHTML.indexOf('<img')>-1){s."
+"lta[1]=s.linkObject.innerHTML.match('src=\"([^\"]*)')[1]}else{s.lta[1"
+"]=s.linkObject.innerHTML;}}}s.lta[2]=s.pageName+' | '+s.lta[1];}if("
+"s.linkType!=0){for(var x=0;x<vla.length;x++){s[vla[x]]=s.cleanStr(s"
+".lta[x]);if(e){s.events=s.apl(s.events,e,',',2);s.linkTrackVars=s.a"
+"pl(s.linkTrackVars,'events',',',2);}}s.linkTrackVars=s.apl(s.linkTr"
+"ackVars,vl,',',2);}else{if(s.lta[1]){var tcv='';for(var x=0;x<s.lta"
+".length;x++){tcv+=s.cleanStr(s.lta[x])+'^^'}s.c_w(c,tcv)}}s.lta=nul"
+"l;}");
s.cleanStr = function(a){
    if(typeof a != 'undefined'){
        a = a.replace(/<\/?span[^>]*>/g, '');
        return a;
    }
}


 

/********** Siteat Plugins for specific sites -end ***********/


//Set Tracking Server
s.trackingServer="metrics.vyvansepro.com";
s.trackingServerSecure="smetrics.vyvansepro.com";

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

 AppMeasurement for JavaScript version: 1.4.1
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function AppMeasurement(){var s=this;s.version="1.4.1";var w=window;if(!w.s_c_in)w.s_c_il=[],w.s_c_in=0;s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;s._c="s_c";var k=w.sb;k||(k=null);var m=w,i,o;try{i=m.parent;for(o=m.location;i&&i.location&&o&&""+i.location!=""+o&&m.location&&""+i.location!=""+m.location&&i.location.host==o.host;)m=i,i=m.parent}catch(p){}s.eb=function(s){try{console.log(s)}catch(a){}};s.ta=function(s){return""+parseInt(s)==""+s};s.replace=function(s,a,c){if(!s||s.indexOf(a)<
0)return s;return s.split(a).join(c)};s.escape=function(b){var a,c;if(!b)return b;b=encodeURIComponent(b);for(a=0;a<7;a++)c="+~!*()'".substring(a,a+1),b.indexOf(c)>=0&&(b=s.replace(b,c,"%"+c.charCodeAt(0).toString(16).toUpperCase()));return b};s.unescape=function(b){if(!b)return b;b=b.indexOf("+")>=0?s.replace(b,"+"," "):b;try{return decodeURIComponent(b)}catch(a){}return unescape(b)};s.Va=function(){var b=w.location.hostname,a=s.fpCookieDomainPeriods,c;if(!a)a=s.cookieDomainPeriods;if(b&&!s.cookieDomain&&
!/^[0-9.]+$/.test(b)&&(a=a?parseInt(a):2,a=a>2?a:2,c=b.lastIndexOf("."),c>=0)){for(;c>=0&&a>1;)c=b.lastIndexOf(".",c-1),a--;s.cookieDomain=c>0?b.substring(c):b}return s.cookieDomain};s.c_r=s.cookieRead=function(b){b=s.escape(b);var a=" "+s.d.cookie,c=a.indexOf(" "+b+"="),e=c<0?c:a.indexOf(";",c);b=c<0?"":s.unescape(a.substring(c+2+b.length,e<0?a.length:e));return b!="[[B]]"?b:""};s.c_w=s.cookieWrite=function(b,a,c){var e=s.Va(),d=s.cookieLifetime,f;a=""+a;d=d?(""+d).toUpperCase():"";c&&d!="SESSION"&&
d!="NONE"&&((f=a!=""?parseInt(d?d:0):-60)?(c=new Date,c.setTime(c.getTime()+f*1E3)):c==1&&(c=new Date,f=c.getYear(),c.setYear(f+5+(f<1900?1900:0))));if(b&&d!="NONE")return s.d.cookie=b+"="+s.escape(a!=""?a:"[[B]]")+"; path=/;"+(c&&d!="SESSION"?" expires="+c.toGMTString()+";":"")+(e?" domain="+e+";":""),s.cookieRead(b)==a;return 0};s.C=[];s.B=function(b,a,c){if(s.ma)return 0;if(!s.maxDelay)s.maxDelay=250;var e=0,d=(new Date).getTime()+s.maxDelay,f=s.d.qb,g=["webkitvisibilitychange","visibilitychange"];
if(!f)f=s.d.rb;if(f&&f=="prerender"){if(!s.X){s.X=1;for(c=0;c<g.length;c++)s.d.addEventListener(g[c],function(){var a=s.d.qb;if(!a)a=s.d.rb;if(a=="visible")s.X=0,s.delayReady()})}e=1;d=0}else c||s.q("_d")&&(e=1);e&&(s.C.push({m:b,a:a,t:d}),s.X||setTimeout(s.delayReady,s.maxDelay));return e};s.delayReady=function(){var b=(new Date).getTime(),a=0,c;for(s.q("_d")&&(a=1);s.C.length>0;){c=s.C.shift();if(a&&!c.t&&c.t>b){s.C.unshift(c);setTimeout(s.delayReady,parseInt(s.maxDelay/2));break}s.ma=1;s[c.m].apply(s,
c.a);s.ma=0}};s.setAccount=s.sa=function(b){var a,c;if(!s.B("setAccount",arguments))if(s.account=b,s.allAccounts){a=s.allAccounts.concat(b.split(","));s.allAccounts=[];a.sort();for(c=0;c<a.length;c++)(c==0||a[c-1]!=a[c])&&s.allAccounts.push(a[c])}else s.allAccounts=b.split(",")};s.foreachVar=function(b,a){var c,e,d,f,g="";d=e="";if(s.lightProfileID)c=s.H,(g=s.lightTrackVars)&&(g=","+g+","+s.ba.join(",")+",");else{c=s.c;if(s.pe||s.linkType)if(g=s.linkTrackVars,e=s.linkTrackEvents,s.pe&&(d=s.pe.substring(0,
1).toUpperCase()+s.pe.substring(1),s[d]))g=s[d].pb,e=s[d].ob;g&&(g=","+g+","+s.z.join(",")+",");e&&g&&(g+=",events,")}a&&(a=","+a+",");for(e=0;e<c.length;e++)d=c[e],(f=s[d])&&(!g||g.indexOf(","+d+",")>=0)&&(!a||a.indexOf(","+d+",")>=0)&&b(d,f)};s.J=function(b,a,c,e,d){var f="",g,j,w,q,i=0;b=="contextData"&&(b="c");if(a){for(g in a)if(!Object.prototype[g]&&(!d||g.substring(0,d.length)==d)&&a[g]&&(!c||c.indexOf(","+(e?e+".":"")+g+",")>=0)){w=!1;if(i)for(j=0;j<i.length;j++)g.substring(0,i[j].length)==
i[j]&&(w=!0);if(!w&&(f==""&&(f+="&"+b+"."),j=a[g],d&&(g=g.substring(d.length)),g.length>0))if(w=g.indexOf("."),w>0)j=g.substring(0,w),w=(d?d:"")+j+".",i||(i=[]),i.push(w),f+=s.J(j,a,c,e,w);else if(typeof j=="boolean"&&(j=j?"true":"false"),j){if(e=="retrieveLightData"&&d.indexOf(".contextData.")<0)switch(w=g.substring(0,4),q=g.substring(4),g){case "transactionID":g="xact";break;case "channel":g="ch";break;case "campaign":g="v0";break;default:s.ta(q)&&(w=="prop"?g="c"+q:w=="eVar"?g="v"+q:w=="list"?
g="l"+q:w=="hier"&&(g="h"+q,j=j.substring(0,255)))}f+="&"+s.escape(g)+"="+s.escape(j)}}f!=""&&(f+="&."+b)}return f};s.Xa=function(){var b="",a,c,e,d,f,g,j,w,i="",k="",m=c="";if(s.lightProfileID)a=s.H,(i=s.lightTrackVars)&&(i=","+i+","+s.ba.join(",")+",");else{a=s.c;if(s.pe||s.linkType)if(i=s.linkTrackVars,k=s.linkTrackEvents,s.pe&&(c=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1),s[c]))i=s[c].pb,k=s[c].ob;i&&(i=","+i+","+s.z.join(",")+",");k&&(k=","+k+",",i&&(i+=",events,"));s.events2&&(m+=(m!=
""?",":"")+s.events2)}s.AudienceManagement&&s.AudienceManagement.isReady()&&(b+=s.J("d",s.AudienceManagement.getEventCallConfigParams()));for(c=0;c<a.length;c++){d=a[c];f=s[d];e=d.substring(0,4);g=d.substring(4);!f&&d=="events"&&m&&(f=m,m="");if(f&&(!i||i.indexOf(","+d+",")>=0)){switch(d){case "supplementalDataID":d="sdid";break;case "timestamp":d="ts";break;case "dynamicVariablePrefix":d="D";break;case "visitorID":d="vid";break;case "marketingCloudVisitorID":d="mid";break;case "analyticsVisitorID":d=
"aid";break;case "audienceManagerLocationHint":d="aamlh";break;case "audienceManagerBlob":d="aamb";break;case "authState":d="as";break;case "pageURL":d="g";if(f.length>255)s.pageURLRest=f.substring(255),f=f.substring(0,255);break;case "pageURLRest":d="-g";break;case "referrer":d="r";break;case "vmk":case "visitorMigrationKey":d="vmt";break;case "visitorMigrationServer":d="vmf";s.ssl&&s.visitorMigrationServerSecure&&(f="");break;case "visitorMigrationServerSecure":d="vmf";!s.ssl&&s.visitorMigrationServer&&
(f="");break;case "charSet":d="ce";break;case "visitorNamespace":d="ns";break;case "cookieDomainPeriods":d="cdp";break;case "cookieLifetime":d="cl";break;case "variableProvider":d="vvp";break;case "currencyCode":d="cc";break;case "channel":d="ch";break;case "transactionID":d="xact";break;case "campaign":d="v0";break;case "latitude":d="lat";break;case "longitude":d="lon";break;case "resolution":d="s";break;case "colorDepth":d="c";break;case "javascriptVersion":d="j";break;case "javaEnabled":d="v";
break;case "cookiesEnabled":d="k";break;case "browserWidth":d="bw";break;case "browserHeight":d="bh";break;case "connectionType":d="ct";break;case "homepage":d="hp";break;case "events":m&&(f+=(f!=""?",":"")+m);if(k){g=f.split(",");f="";for(e=0;e<g.length;e++)j=g[e],w=j.indexOf("="),w>=0&&(j=j.substring(0,w)),w=j.indexOf(":"),w>=0&&(j=j.substring(0,w)),k.indexOf(","+j+",")>=0&&(f+=(f?",":"")+g[e])}break;case "events2":f="";break;case "contextData":b+=s.J("c",s[d],i,d);f="";break;case "lightProfileID":d=
"mtp";break;case "lightStoreForSeconds":d="mtss";s.lightProfileID||(f="");break;case "lightIncrementBy":d="mti";s.lightProfileID||(f="");break;case "retrieveLightProfiles":d="mtsr";break;case "deleteLightProfiles":d="mtsd";break;case "retrieveLightData":s.retrieveLightProfiles&&(b+=s.J("mts",s[d],i,d));f="";break;default:s.ta(g)&&(e=="prop"?d="c"+g:e=="eVar"?d="v"+g:e=="list"?d="l"+g:e=="hier"&&(d="h"+g,f=f.substring(0,255)))}f&&(b+="&"+d+"="+(d.substring(0,3)!="pev"?s.escape(f):f))}d=="pev3"&&s.g&&
(b+=s.g)}return b};s.u=function(s){var a=s.tagName;if(""+s.wb!="undefined"||""+s.ib!="undefined"&&(""+s.ib).toUpperCase()!="HTML")return"";a=a&&a.toUpperCase?a.toUpperCase():"";a=="SHAPE"&&(a="");a&&((a=="INPUT"||a=="BUTTON")&&s.type&&s.type.toUpperCase?a=s.type.toUpperCase():!a&&s.href&&(a="A"));return a};s.oa=function(s){var a=s.href?s.href:"",c,e,d;c=a.indexOf(":");e=a.indexOf("?");d=a.indexOf("/");if(a&&(c<0||e>=0&&c>e||d>=0&&c>d))e=s.protocol&&s.protocol.length>1?s.protocol:l.protocol?l.protocol:
"",c=l.pathname.lastIndexOf("/"),a=(e?e+"//":"")+(s.host?s.host:l.host?l.host:"")+(h.substring(0,1)!="/"?l.pathname.substring(0,c<0?0:c)+"/":"")+a;return a};s.D=function(b){var a=s.u(b),c,e,d="",f=0;if(a){c=b.protocol;e=b.onclick;if(b.href&&(a=="A"||a=="AREA")&&(!e||!c||c.toLowerCase().indexOf("javascript")<0))d=s.oa(b);else if(e)d=s.replace(s.replace(s.replace(s.replace(""+e,"\r",""),"\n",""),"\t","")," ",""),f=2;else if(a=="INPUT"||a=="SUBMIT"){if(b.value)d=b.value;else if(b.innerText)d=b.innerText;
else if(b.textContent)d=b.textContent;f=3}else if(b.src&&a=="IMAGE")d=b.src;if(d)return{id:d.substring(0,100),type:f}}return 0};s.tb=function(b){for(var a=s.u(b),c=s.D(b);b&&!c&&a!="BODY";)if(b=b.parentElement?b.parentElement:b.parentNode)a=s.u(b),c=s.D(b);if(!c||a=="BODY")b=0;if(b&&(a=b.onclick?""+b.onclick:"",a.indexOf(".tl(")>=0||a.indexOf(".trackLink(")>=0))b=0;return b};s.hb=function(){var b,a,c=s.linkObject,e=s.linkType,d=s.linkURL,f,g;s.ca=1;if(!c)s.ca=0,c=s.clickObject;if(c){b=s.u(c);for(a=
s.D(c);c&&!a&&b!="BODY";)if(c=c.parentElement?c.parentElement:c.parentNode)b=s.u(c),a=s.D(c);if(!a||b=="BODY")c=0;if(c){var j=c.onclick?""+c.onclick:"";if(j.indexOf(".tl(")>=0||j.indexOf(".trackLink(")>=0)c=0}}else s.ca=1;!d&&c&&(d=s.oa(c));d&&!s.linkLeaveQueryString&&(f=d.indexOf("?"),f>=0&&(d=d.substring(0,f)));if(!e&&d){var i=0,k=0,m;if(s.trackDownloadLinks&&s.linkDownloadFileTypes){j=d.toLowerCase();f=j.indexOf("?");g=j.indexOf("#");f>=0?g>=0&&g<f&&(f=g):f=g;f>=0&&(j=j.substring(0,f));f=s.linkDownloadFileTypes.toLowerCase().split(",");
for(g=0;g<f.length;g++)(m=f[g])&&j.substring(j.length-(m.length+1))=="."+m&&(e="d")}if(s.trackExternalLinks&&!e&&(j=d.toLowerCase(),s.ra(j))){if(!s.linkInternalFilters)s.linkInternalFilters=w.location.hostname;f=0;s.linkExternalFilters?(f=s.linkExternalFilters.toLowerCase().split(","),i=1):s.linkInternalFilters&&(f=s.linkInternalFilters.toLowerCase().split(","));if(f){for(g=0;g<f.length;g++)m=f[g],j.indexOf(m)>=0&&(k=1);k?i&&(e="e"):i||(e="e")}}}s.linkObject=c;s.linkURL=d;s.linkType=e;if(s.trackClickMap||
s.trackInlineStats)if(s.g="",c){e=s.pageName;d=1;c=c.sourceIndex;if(!e)e=s.pageURL,d=0;if(w.s_objectID)a.id=w.s_objectID,c=a.type=1;if(e&&a&&a.id&&b)s.g="&pid="+s.escape(e.substring(0,255))+(d?"&pidt="+d:"")+"&oid="+s.escape(a.id.substring(0,100))+(a.type?"&oidt="+a.type:"")+"&ot="+b+(c?"&oi="+c:"")}};s.Ya=function(){var b=s.ca,a=s.linkType,c=s.linkURL,e=s.linkName;if(a&&(c||e))a=a.toLowerCase(),a!="d"&&a!="e"&&(a="o"),s.pe="lnk_"+a,s.pev1=c?s.escape(c):"",s.pev2=e?s.escape(e):"",b=1;s.abort&&(b=
0);if(s.trackClickMap||s.trackInlineStats){a={};c=0;var d=s.cookieRead("s_sq"),f=d?d.split("&"):0,g,j,w;d=0;if(f)for(g=0;g<f.length;g++)j=f[g].split("="),e=s.unescape(j[0]).split(","),j=s.unescape(j[1]),a[j]=e;e=s.account.split(",");if(b||s.g){b&&!s.g&&(d=1);for(j in a)if(!Object.prototype[j])for(g=0;g<e.length;g++){d&&(w=a[j].join(","),w==s.account&&(s.g+=(j.charAt(0)!="&"?"&":"")+j,a[j]=[],c=1));for(f=0;f<a[j].length;f++)w=a[j][f],w==e[g]&&(d&&(s.g+="&u="+s.escape(w)+(j.charAt(0)!="&"?"&":"")+j+
"&u=0"),a[j].splice(f,1),c=1)}b||(c=1);if(c){d="";g=2;!b&&s.g&&(d=s.escape(e.join(","))+"="+s.escape(s.g),g=1);for(j in a)!Object.prototype[j]&&g>0&&a[j].length>0&&(d+=(d?"&":"")+s.escape(a[j].join(","))+"="+s.escape(j),g--);s.cookieWrite("s_sq",d)}}}return b};s.Za=function(){if(!s.nb){var b=new Date,a=m.location,c,e,d=e=c="",f="",g="",w="1.2",i=s.cookieWrite("s_cc","true",0)?"Y":"N",k="",n="";if(b.setUTCDate&&(w="1.3",(0).toPrecision&&(w="1.5",b=[],b.forEach))){w="1.6";e=0;c={};try{e=new Iterator(c),
e.next&&(w="1.7",b.reduce&&(w="1.8",w.trim&&(w="1.8.1",Date.parse&&(w="1.8.2",Object.create&&(w="1.8.5")))))}catch(o){}}c=screen.width+"x"+screen.height;d=navigator.javaEnabled()?"Y":"N";e=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;f=s.w.innerWidth?s.w.innerWidth:s.d.documentElement.offsetWidth;g=s.w.innerHeight?s.w.innerHeight:s.d.documentElement.offsetHeight;try{s.b.addBehavior("#default#homePage"),k=s.b.ub(a)?"Y":"N"}catch(p){}try{s.b.addBehavior("#default#clientCaps"),n=s.b.connectionType}catch(r){}s.resolution=
c;s.colorDepth=e;s.javascriptVersion=w;s.javaEnabled=d;s.cookiesEnabled=i;s.browserWidth=f;s.browserHeight=g;s.connectionType=n;s.homepage=k;s.nb=1}};s.I={};s.loadModule=function(b,a){var c=s.I[b];if(!c){c=w["AppMeasurement_Module_"+b]?new w["AppMeasurement_Module_"+b](s):{};s.I[b]=s[b]=c;c.Fa=function(){return c.Ja};c.Ka=function(a){if(c.Ja=a)s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c)};try{Object.defineProperty?Object.defineProperty(c,"onLoad",{get:c.Fa,set:c.Ka}):c._olc=1}catch(e){c._olc=
1}}a&&(s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c))};s.q=function(b){var a,c;for(a in s.I)if(!Object.prototype[a]&&(c=s.I[a])){if(c._olc&&c.onLoad)c._olc=0,c.onLoad(s,c);if(c[b]&&c[b]())return 1}return 0};s.bb=function(){var b=Math.floor(Math.random()*1E13),a=s.visitorSampling,c=s.visitorSamplingGroup;c="s_vsn_"+(s.visitorNamespace?s.visitorNamespace:s.account)+(c?"_"+c:"");var e=s.cookieRead(c);if(a){e&&(e=parseInt(e));if(!e){if(!s.cookieWrite(c,b))return 0;e=b}if(e%1E4>v)return 0}return 1};
s.K=function(b,a){var c,e,d,f,g,w;for(c=0;c<2;c++){e=c>0?s.ia:s.c;for(d=0;d<e.length;d++)if(f=e[d],(g=b[f])||b["!"+f]){if(!a&&(f=="contextData"||f=="retrieveLightData")&&s[f])for(w in s[f])g[w]||(g[w]=s[f][w]);s[f]=g}}};s.Aa=function(b,a){var c,e,d,f;for(c=0;c<2;c++){e=c>0?s.ia:s.c;for(d=0;d<e.length;d++)f=e[d],b[f]=s[f],!a&&!b[f]&&(b["!"+f]=1)}};s.Ua=function(s){var a,c,e,d,f,g=0,w,i="",k="";if(s&&s.length>255&&(a=""+s,c=a.indexOf("?"),c>0&&(w=a.substring(c+1),a=a.substring(0,c),d=a.toLowerCase(),
e=0,d.substring(0,7)=="http://"?e+=7:d.substring(0,8)=="https://"&&(e+=8),c=d.indexOf("/",e),c>0&&(d=d.substring(e,c),f=a.substring(c),a=a.substring(0,c),d.indexOf("google")>=0?g=",q,ie,start,search_key,word,kw,cd,":d.indexOf("yahoo.co")>=0&&(g=",p,ei,"),g&&w)))){if((s=w.split("&"))&&s.length>1){for(e=0;e<s.length;e++)d=s[e],c=d.indexOf("="),c>0&&g.indexOf(","+d.substring(0,c)+",")>=0?i+=(i?"&":"")+d:k+=(k?"&":"")+d;i&&k?w=i+"&"+k:k=""}c=253-(w.length-k.length)-a.length;s=a+(c>0?f.substring(0,c):
"")+"?"+w}return s};s.U=!1;s.O=!1;s.Ia=function(b){s.marketingCloudVisitorID=b;s.O=!0;s.k()};s.R=!1;s.L=!1;s.Ca=function(b){s.analyticsVisitorID=b;s.L=!0;s.k()};s.T=!1;s.N=!1;s.Ea=function(b){s.audienceManagerLocationHint=b;s.N=!0;s.k()};s.S=!1;s.M=!1;s.Da=function(b){s.audienceManagerBlob=b;s.M=!0;s.k()};s.isReadyToTrack=function(){var b=!0,a=s.visitor;if(a&&a.isAllowed()){if(!s.U&&!s.marketingCloudVisitorID&&a.getMarketingCloudVisitorID&&(s.U=!0,s.marketingCloudVisitorID=a.getMarketingCloudVisitorID([s,
s.Ia]),s.marketingCloudVisitorID))s.O=!0;if(!s.R&&!s.analyticsVisitorID&&a.getAnalyticsVisitorID&&(s.R=!0,s.analyticsVisitorID=a.getAnalyticsVisitorID([s,s.Ca]),s.analyticsVisitorID))s.L=!0;if(!s.T&&!s.audienceManagerLocationHint&&a.getAudienceManagerLocationHint&&(s.T=!0,s.audienceManagerLocationHint=a.getAudienceManagerLocationHint([s,s.Ea]),s.audienceManagerLocationHint))s.N=!0;if(!s.S&&!s.audienceManagerBlob&&a.getAudienceManagerBlob&&(s.S=!0,s.audienceManagerBlob=a.getAudienceManagerBlob([s,
s.Da]),s.audienceManagerBlob))s.M=!0;if(s.U&&!s.O&&!s.marketingCloudVisitorID||s.R&&!s.L&&!s.analyticsVisitorID||s.T&&!s.N&&!s.audienceManagerLocationHint||s.S&&!s.M&&!s.audienceManagerBlob)b=!1}return b};s.j=k;s.l=0;s.callbackWhenReadyToTrack=function(b,a,c){var e;e={};e.Oa=b;e.Na=a;e.La=c;if(s.j==k)s.j=[];s.j.push(e);if(s.l==0)s.l=setInterval(s.k,100)};s.k=function(){var b;if(s.isReadyToTrack()){if(s.l)clearInterval(s.l),s.l=0;if(s.j!=k)for(;s.j.length>0;)b=s.j.shift(),b.Na.apply(b.Oa,b.La)}};s.Ga=
function(b){var a,c,e=k,d=k;if(!s.isReadyToTrack()){a=[];if(b!=k)for(c in e={},b)e[c]=b[c];d={};s.Aa(d,!0);a.push(e);a.push(d);s.callbackWhenReadyToTrack(s,s.track,a);return!0}return!1};s.Wa=function(){var b=s.cookieRead("s_fid"),a="",c="",e;e=8;var d=4;if(!b||b.indexOf("-")<0){for(b=0;b<16;b++)e=Math.floor(Math.random()*e),a+="0123456789ABCDEF".substring(e,e+1),e=Math.floor(Math.random()*d),c+="0123456789ABCDEF".substring(e,e+1),e=d=16;b=a+"-"+c}s.cookieWrite("s_fid",b,1)||(b=0);return b};s.t=s.track=
function(b,a){var c,e=new Date,d="s"+Math.floor(e.getTime()/108E5)%10+Math.floor(Math.random()*1E13),f=e.getYear();f="t="+s.escape(e.getDate()+"/"+e.getMonth()+"/"+(f<1900?f+1900:f)+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" "+e.getDay()+" "+e.getTimezoneOffset());if(s.visitor){if(s.visitor.getAuthState)s.authState=s.visitor.getAuthState();if(!s.supplementalDataID&&s.visitor.getSupplementalDataID)s.supplementalDataID=s.visitor.getSupplementalDataID("AppMeasurement:"+s._in,s.expectSupplementalData?
!1:!0)}s.q("_s");if(!s.B("track",arguments)){if(!s.Ga(b)){a&&s.K(a);b&&(c={},s.Aa(c,0),s.K(b));if(s.bb()){if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.Wa();s.hb();s.usePlugins&&s.doPlugins&&s.doPlugins(s);if(s.account){if(!s.abort){if(s.trackOffline&&!s.timestamp)s.timestamp=Math.floor(e.getTime()/1E3);e=w.location;if(!s.pageURL)s.pageURL=e.href?e.href:e;if(!s.referrer&&!s.Ba)s.referrer=m.document.referrer,s.Ba=1;s.referrer=s.Ua(s.referrer);s.q("_g")}if(s.Ya()&&!s.abort)s.Za(),f+=
s.Xa(),s.gb(d,f),s.q("_t"),s.referrer=""}}b&&s.K(c,1)}s.abort=s.supplementalDataID=s.timestamp=s.pageURLRest=s.linkObject=s.clickObject=s.linkURL=s.linkName=s.linkType=w.vb=s.pe=s.pev1=s.pev2=s.pev3=s.g=0}};s.tl=s.trackLink=function(b,a,c,e,d){s.linkObject=b;s.linkType=a;s.linkName=c;if(d)s.i=b,s.p=d;return s.track(e)};s.trackLight=function(b,a,c,e){s.lightProfileID=b;s.lightStoreForSeconds=a;s.lightIncrementBy=c;return s.track(e)};s.clearVars=function(){var b,a;for(b=0;b<s.c.length;b++)if(a=s.c[b],
a.substring(0,4)=="prop"||a.substring(0,4)=="eVar"||a.substring(0,4)=="hier"||a.substring(0,4)=="list"||a=="channel"||a=="events"||a=="eventList"||a=="products"||a=="productList"||a=="purchaseID"||a=="transactionID"||a=="state"||a=="zip"||a=="campaign")s[a]=void 0};s.tagContainerMarker="";s.gb=function(b,a){var c,e=s.trackingServer;c="";var d=s.dc,f="sc.",w=s.visitorNamespace;if(e){if(s.trackingServerSecure&&s.ssl)e=s.trackingServerSecure}else{if(!w)w=s.account,e=w.indexOf(","),e>=0&&(w=w.substring(0,
e)),w=w.replace(/[^A-Za-z0-9]/g,"");c||(c="2o7.net");d=d?(""+d).toLowerCase():"d1";c=="2o7.net"&&(d=="d1"?d="112":d=="d2"&&(d="122"),f="");e=w+"."+d+"."+f+c}c=s.ssl?"https://":"http://";d=s.AudienceManagement&&s.AudienceManagement.isReady();c+=e+"/b/ss/"+s.account+"/"+(s.mobile?"5.":"")+(d?"10":"1")+"/JS-"+s.version+(s.mb?"T":"")+(s.tagContainerMarker?"-"+s.tagContainerMarker:"")+"/"+b+"?AQB=1&ndh=1&pf=1&"+(d?"callback=s_c_il["+s._in+"].AudienceManagement.passData&":"")+a+"&AQE=1";s.Sa(c);s.Y()};
s.Sa=function(b){s.e||s.$a();s.e.push(b);s.aa=s.r();s.za()};s.$a=function(){s.e=s.cb();if(!s.e)s.e=[]};s.cb=function(){var b,a;if(s.fa()){try{(a=w.localStorage.getItem(s.da()))&&(b=w.JSON.parse(a))}catch(c){}return b}};s.fa=function(){var b=!0;if(!s.trackOffline||!s.offlineFilename||!w.localStorage||!w.JSON)b=!1;return b};s.pa=function(){var b=0;if(s.e)b=s.e.length;s.v&&b++;return b};s.Y=function(){if(!s.v)if(s.qa=k,s.ea)s.aa>s.G&&s.xa(s.e),s.ha(500);else{var b=s.Ma();if(b>0)s.ha(b);else if(b=s.na())s.v=
1,s.fb(b),s.jb(b)}};s.ha=function(b){if(!s.qa)b||(b=0),s.qa=setTimeout(s.Y,b)};s.Ma=function(){var b;if(!s.trackOffline||s.offlineThrottleDelay<=0)return 0;b=s.r()-s.wa;if(s.offlineThrottleDelay<b)return 0;return s.offlineThrottleDelay-b};s.na=function(){if(s.e.length>0)return s.e.shift()};s.fb=function(b){if(s.debugTracking){var a="AppMeasurement Debug: "+b;b=b.split("&");var c;for(c=0;c<b.length;c++)a+="\n\t"+s.unescape(b[c]);s.eb(a)}};s.Ha=function(){return s.marketingCloudVisitorID||s.analyticsVisitorID};
s.Q=!1;var n;try{n=JSON.parse('{"x":"y"}')}catch(r){n=null}n&&n.x=="y"?(s.Q=!0,s.P=function(s){return JSON.parse(s)}):w.$&&w.$.parseJSON?(s.P=function(s){return w.$.parseJSON(s)},s.Q=!0):s.P=function(){return null};s.jb=function(b){var a,c,e;if(s.Ha()&&b.length>2047&&(typeof XMLHttpRequest!="undefined"&&(a=new XMLHttpRequest,"withCredentials"in a?c=1:a=0),!a&&typeof XDomainRequest!="undefined"&&(a=new XDomainRequest,c=2),a&&s.AudienceManagement&&s.AudienceManagement.isReady()))s.Q?a.ja=!0:a=0;!a&&
s.ab&&(b=b.substring(0,2047));if(!a&&s.d.createElement&&s.AudienceManagement&&s.AudienceManagement.isReady()&&(a=s.d.createElement("SCRIPT"))&&"async"in a)(e=(e=s.d.getElementsByTagName("HEAD"))&&e[0]?e[0]:s.d.body)?(a.type="text/javascript",a.setAttribute("async","async"),c=3):a=0;if(!a)a=new Image,a.alt="";a.la=function(){try{if(s.ga)clearTimeout(s.ga),s.ga=0;if(a.timeout)clearTimeout(a.timeout),a.timeout=0}catch(b){}};a.onload=a.lb=function(){a.la();s.Ra();s.V();s.v=0;s.Y();if(a.ja){a.ja=!1;try{var b=
s.P(a.responseText);AudienceManagement.passData(b)}catch(c){}}};a.onabort=a.onerror=a.Ta=function(){a.la();(s.trackOffline||s.ea)&&s.v&&s.e.unshift(s.Qa);s.v=0;s.aa>s.G&&s.xa(s.e);s.V();s.ha(500)};a.onreadystatechange=function(){a.readyState==4&&(a.status==200?a.lb():a.Ta())};s.wa=s.r();if(c==1||c==2){var d=b.indexOf("?");e=b.substring(0,d);d=b.substring(d+1);d=d.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");c==1?(a.open("POST",e,!0),a.send(d)):c==2&&(a.open("POST",e),a.send(d))}else if(a.src=b,c==3){if(s.ua)try{e.removeChild(s.ua)}catch(f){}e.firstChild?
e.insertBefore(a,e.firstChild):e.appendChild(a);s.ua=s.Pa}if(a.abort)s.ga=setTimeout(a.abort,5E3);s.Qa=b;s.Pa=w["s_i_"+s.replace(s.account,",","_")]=a;if(s.useForcedLinkTracking&&s.A||s.p){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;s.W=setTimeout(s.V,s.forcedLinkTrackingTimeout)}};s.Ra=function(){if(s.fa()&&!(s.va>s.G))try{w.localStorage.removeItem(s.da()),s.va=s.r()}catch(b){}};s.xa=function(b){if(s.fa()){s.za();try{w.localStorage.setItem(s.da(),w.JSON.stringify(b)),s.G=s.r()}catch(a){}}};
s.za=function(){if(s.trackOffline){if(!s.offlineLimit||s.offlineLimit<=0)s.offlineLimit=10;for(;s.e.length>s.offlineLimit;)s.na()}};s.forceOffline=function(){s.ea=!0};s.forceOnline=function(){s.ea=!1};s.da=function(){return s.offlineFilename+"-"+s.visitorNamespace+s.account};s.r=function(){return(new Date).getTime()};s.ra=function(s){s=s.toLowerCase();if(s.indexOf("#")!=0&&s.indexOf("about:")!=0&&s.indexOf("opera:")!=0&&s.indexOf("javascript:")!=0)return!0;return!1};s.setTagContainer=function(b){var a,
c,e;s.mb=b;for(a=0;a<s._il.length;a++)if((c=s._il[a])&&c._c=="s_l"&&c.tagContainerName==b){s.K(c);if(c.lmq)for(a=0;a<c.lmq.length;a++)e=c.lmq[a],s.loadModule(e.n);if(c.ml)for(e in c.ml)if(s[e])for(a in b=s[e],e=c.ml[e],e)if(!Object.prototype[a]&&(typeof e[a]!="function"||(""+e[a]).indexOf("s_c_il")<0))b[a]=e[a];if(c.mmq)for(a=0;a<c.mmq.length;a++)e=c.mmq[a],s[e.m]&&(b=s[e.m],b[e.f]&&typeof b[e.f]=="function"&&(e.a?b[e.f].apply(b,e.a):b[e.f].apply(b)));if(c.tq)for(a=0;a<c.tq.length;a++)s.track(c.tq[a]);
c.s=s;break}};s.Util={urlEncode:s.escape,urlDecode:s.unescape,cookieRead:s.cookieRead,cookieWrite:s.cookieWrite,getQueryParam:function(b,a,c){var e;a||(a=s.pageURL?s.pageURL:w.location);c||(c="&");if(b&&a&&(a=""+a,e=a.indexOf("?"),e>=0&&(a=c+a.substring(e+1)+c,e=a.indexOf(c+b+"="),e>=0&&(a=a.substring(e+c.length+b.length+1),e=a.indexOf(c),e>=0&&(a=a.substring(0,e)),a.length>0))))return s.unescape(a);return""}};s.z=["supplementalDataID","timestamp","dynamicVariablePrefix","visitorID","marketingCloudVisitorID",
"analyticsVisitorID","audienceManagerLocationHint","authState","fid","vmk","visitorMigrationKey","visitorMigrationServer","visitorMigrationServerSecure","charSet","visitorNamespace","cookieDomainPeriods","fpCookieDomainPeriods","cookieLifetime","pageName","pageURL","referrer","contextData","currencyCode","lightProfileID","lightStoreForSeconds","lightIncrementBy","retrieveLightProfiles","deleteLightProfiles","retrieveLightData","pe","pev1","pev2","pev3","pageURLRest"];s.c=s.z.concat(["purchaseID",
"variableProvider","channel","server","pageType","transactionID","campaign","state","zip","events","events2","products","audienceManagerBlob","tnt"]);s.ba=["timestamp","charSet","visitorNamespace","cookieDomainPeriods","cookieLifetime","contextData","lightProfileID","lightStoreForSeconds","lightIncrementBy"];s.H=s.ba.slice(0);s.ia=["account","allAccounts","debugTracking","visitor","trackOffline","offlineLimit","offlineThrottleDelay","offlineFilename","usePlugins","doPlugins","configURL","visitorSampling",
"visitorSamplingGroup","linkObject","clickObject","linkURL","linkName","linkType","trackDownloadLinks","trackExternalLinks","trackClickMap","trackInlineStats","linkLeaveQueryString","linkTrackVars","linkTrackEvents","linkDownloadFileTypes","linkExternalFilters","linkInternalFilters","useForcedLinkTracking","forcedLinkTrackingTimeout","trackingServer","trackingServerSecure","ssl","abort","mobile","dc","lightTrackVars","maxDelay","expectSupplementalData","AudienceManagement"];for(i=0;i<=250;i++)i<76&&
(s.c.push("prop"+i),s.H.push("prop"+i)),s.c.push("eVar"+i),s.H.push("eVar"+i),i<6&&s.c.push("hier"+i),i<4&&s.c.push("list"+i);i=["latitude","longitude","resolution","colorDepth","javascriptVersion","javaEnabled","cookiesEnabled","browserWidth","browserHeight","connectionType","homepage"];s.c=s.c.concat(i);s.z=s.z.concat(i);s.ssl=w.location.protocol.toLowerCase().indexOf("https")>=0;s.charSet="UTF-8";s.contextData={};s.offlineThrottleDelay=0;s.offlineFilename="AppMeasurement.offline";s.wa=0;s.aa=0;
s.G=0;s.va=0;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.w=w;s.d=w.document;try{s.ab=navigator.appName=="Microsoft Internet Explorer"}catch(t){}s.V=function(){if(s.W)w.clearTimeout(s.W),s.W=k;s.i&&s.A&&s.i.dispatchEvent(s.A);if(s.p)if(typeof s.p=="function")s.p();else if(s.i&&s.i.href)s.d.location=s.i.href;s.i=s.A=s.p=0};s.ya=function(){s.b=s.d.body;if(s.b)if(s.o=function(b){var a,c,e,d,f;if(!(s.d&&s.d.getElementById("cppXYctnr")||b&&b["s_fe_"+s._in])){if(s.ka)if(s.useForcedLinkTracking)s.b.removeEventListener("click",
s.o,!1);else{s.b.removeEventListener("click",s.o,!0);s.ka=s.useForcedLinkTracking=0;return}else s.useForcedLinkTracking=0;s.clickObject=b.srcElement?b.srcElement:b.target;try{if(s.clickObject&&(!s.F||s.F!=s.clickObject)&&(s.clickObject.tagName||s.clickObject.parentElement||s.clickObject.parentNode)){var g=s.F=s.clickObject;if(s.Z)clearTimeout(s.Z),s.Z=0;s.Z=setTimeout(function(){if(s.F==g)s.F=0},1E4);e=s.pa();s.track();if(e<s.pa()&&s.useForcedLinkTracking&&b.target){for(d=b.target;d&&d!=s.b&&d.tagName.toUpperCase()!=
"A"&&d.tagName.toUpperCase()!="AREA";)d=d.parentNode;if(d&&(f=d.href,s.ra(f)||(f=0),c=d.target,b.target.dispatchEvent&&f&&(!c||c=="_self"||c=="_top"||c=="_parent"||w.name&&c==w.name))){try{a=s.d.createEvent("MouseEvents")}catch(i){a=new w.MouseEvent}if(a){try{a.initMouseEvent("click",b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget)}catch(k){a=0}if(a)a["s_fe_"+s._in]=a.s_fe=1,b.stopPropagation(),b.kb&&b.kb(),
b.preventDefault(),s.i=b.target,s.A=a}}}}else s.clickObject=0}catch(m){s.clickObject=0}}},s.b&&s.b.attachEvent)s.b.attachEvent("onclick",s.o);else{if(s.b&&s.b.addEventListener){if(navigator&&(navigator.userAgent.indexOf("WebKit")>=0&&s.d.createEvent||navigator.userAgent.indexOf("Firefox/2")>=0&&w.MouseEvent))s.ka=1,s.useForcedLinkTracking=1,s.b.addEventListener("click",s.o,!0);s.b.addEventListener("click",s.o,!1)}}else setTimeout(s.ya,30)};s.ya()}
function s_gi(s){var w,k=window.s_c_il,m,i,o=s.split(","),p,n,r=0;if(k)for(m=0;!r&&m<k.length;){w=k[m];if(w._c=="s_c"&&(w.account||w.oun))if(w.account&&w.account==s)r=1;else{i=w.account?w.account:w.oun;i=w.allAccounts?w.allAccounts:i.split(",");for(p=0;p<o.length;p++)for(n=0;n<i.length;n++)o[p]==i[n]&&(r=1)}m++}r||(w=new AppMeasurement);w.setAccount?w.setAccount(s):w.sa&&w.sa(s);return w}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var s=window,w=s.s_giq,k,m,i;if(w)for(k=0;k<w.length;k++)m=w[k],i=s_gi(m.oun),i.setAccount(m.un),i.setTagContainer(m.tagContainerName);s.s_giq=0}s_pgicq();
   