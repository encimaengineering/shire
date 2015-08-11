<script>
//Onclick code for custom click and other events - begin
scLinkCustVars="prop1,prop2,prop4,prop5,prop6,prop7,prop8,prop9,prop10,prop11,prop12,prop24,prop41,eVar45,eVar46,eVar47,eVar50,eVar55";

//9-1
$('a#ctl00_objHeader_ptSiteLink').on('click',function(){
    s.linkTrackVars='eVar21'+','+scLinkCustVars;
    s.eVar21='internal exit_lialda patient site';
    s.events=s.linkTrackEvents='';
    s.tl(this,'e', s.eVar21);
})
//9-3
$('a#hp-learn').on('click',function(){
    s.linkTrackVars='eVar22'+','+scLinkCustVars;
    s.eVar22='nav_learn more brandbox callout';
    s.events=s.linkTrackEvents='';
    s.tl(this,'o', s.eVar22);
})
//9-4,11-1
$('a[href*="lialdasamplecenter"]').on('click',function(){
    s.linkTrackVars='eVar21'+','+scLinkCustVars;
    s.eVar21='internal exit_lialda sample center';
    s.events=s.linkTrackEvents='';
    s.tl(this,'e', s.eVar21);
})
//9-5
$('div.formulary-callout a[href*="lialda-formulary-coverage"]').on('click',function(){
    s.linkTrackVars='eVar22'+','+scLinkCustVars;
    s.eVar22='nav_find coverage callout';
    s.events=s.linkTrackEvents='';
    s.tl(this,'o', s.eVar22);
})
//9-7
$('a.updates[href*="lialda-updates.aspx"]').on('click',function(){
    s.linkTrackVars='eVar22'+','+scLinkCustVars;
    s.eVar22='nav_sign up for updates footer link';
    s.events=s.linkTrackEvents='';
    s.tl(this,'o', s.eVar22);
})
//9-8,9-9,16-1
$('a[href*="http://www.shire.com"]').on('click',function(){
    s.linkTrackVars='eVar21'+','+scLinkCustVars;
    s.eVar21='internal exit_shire us';
    s.events=s.linkTrackEvents='';
    s.tl(this,'o', s.eVar21);
})
//10-1 - 10-2 replaced by function below
// $('div.ui-accordion-header').on('click',function(){
//     var scState=$(this).attr('aria-selected');
//     console.log(scState);
//     if(scState=='false'){
//       //console.log('false set');
//     }
//     else if(scState=='true'){
//         var scLink=$(this).attr('id');
//         var scText=
//         if(scLink=='ui-id-1'){scLink="clincal characteristics of uc"}
//         else if(scLink=='ui-id-3'){scLink="diagnosis of uc"}
//         s.linkTrackVars='eVar22'+','+scLinkCustVars;
//         s.eVar22="expansion_"+scLink;
//         s.events=s.linkTrackEvents='';
//         s.tl(this,'o', s.eVar22);
//     }
// })
// 

//10-1,10-2,15-1,15-2
$('div.ui-accordion-header').on('click',function(){
    var scState=$(this).attr('aria-selected');
    console.log(scState);
    if(scState=='false'){
      //console.log('false set');
    }
    else if(scState=='true'){
        var scText=$(this).text().toLowerCase();
        var scText=$.trim(scText);
        s.linkTrackVars='eVar22'+','+scLinkCustVars;
        s.eVar22="expansion_"+scText;
        s.events=s.linkTrackEvents='';
        s.tl(this,'o', s.eVar22);
    }
})

//14-1,14-2
$('select#f_state').one('blur',function(){
        s.eVar30="formulary coverage";
        s.eVar34="step 1 select state";
        s.linkTrackVars='eVar30,eVar34,events'+','+scLinkCustVars;
        s.events=s.linkTrackEvents="event39,event3";
        s.tl(this,'o', s.eVar30+'_form touched');
        $('select#f_state').on('blur',function(){
            s.eVar30="formulary coverage";
            s.eVar34="step 1 select state";
            s.linkTrackVars='eVar30,eVar34,events'+','+scLinkCustVars;
            s.events=s.linkTrackEvents="event3";
            s.tl(this,'o', s.eVar30+'_field interaction');
        })
})
//14-3
$('a.f_search_plan').on('click',function(){
    s.eVar30="formulary coverage";
    s.eVar34="step 2 search for plans";
    s.linkTrackVars='eVar30,eVar34,events'+','+scLinkCustVars;
    s.events=s.linkTrackEvents="event3";
    s.tl(this,'o', s.eVar30+'_field interaction');
})
//14-4
$('select#f_plan_type_dropdown').on('blur',function(){
    s.eVar30="formulary coverage";
    s.eVar34="step 3 select plan type";
    s.linkTrackVars='eVar30,eVar34,events'+','+scLinkCustVars;
    s.events=s.linkTrackEvents="event3";
    s.tl(this,'o', s.eVar30+'_field interaction');
})
//14-5
$('div#f_results_manual_plan_actions a.submit_button').on('blur',function(){
    s.eVar30="formulary coverage";
    s.eVar34="step 4 submit";
    s.linkTrackVars='eVar30,eVar34,events'+','+scLinkCustVars;
    s.events=s.linkTrackEvents="event3";
    s.tl(this,'o', s.eVar30+'_field interaction');
})
//14-6
$('div#f_plan_box_tabs a').on('click',function(){
    var scText=$(this).text().toLowerCase();
    s.eVar30="formulary coverage";
    s.eVar34=scText;
    s.linkTrackVars='eVar30,eVar34,events'+','+scLinkCustVars;
    s.events=s.linkTrackEvents="event3";
    s.tl(this,'o', s.eVar30+'_field interaction');
})
//14-8,14-9
$('div#f_results_plan_actions a').on('click',function(){
    var scVal=$(this).attr('class');
    if(scVal.indexOf('email_button')>-1){scVal='email results'}
    else if(scVal.indexOf('print_button')>-1){scVal='print results'}
    s.eVar30="formulary coverage";
    s.eVar34=scVal;
    s.linkTrackVars='eVar30,eVar34,events'+','+scLinkCustVars;
    s.events=s.linkTrackEvents="event3";
    s.tl(this,'o', s.eVar30+'_field interaction');
})

//15-4,15-6
$('div#patient_support div.resource a[href*="pi.shirecontent"]').on('click',function(){
    s.eVar20='lialda pi guide';
    s.linkTrackVars='eVar20,events'+','+scLinkCustVars;
    s.events=s.linkTrackEvents="event4";
    s.tl(this,'d', s.eVar20+'_download');
})
//15-5
$('div#patient_support div.resource a[href="http://www.activatepharmacycard.com"]').on('click',function(){
    s.eVar20='activate pharmacy card';
    s.linkTrackVars='eVar20,events'+','+scLinkCustVars;
    s.events=s.linkTrackEvents="event4";
    s.tl(this,'d', s.eVar20+'_download');
})
//15-6
$('div#patient_support div.resource a[href="http://www.ShireCares.com"]').on('click',function(){
    s.eVar21='internal exit_shire cares';
    s.linkTrackVars='eVar21,events'+','+scLinkCustVars;
    s.events=s.linkTrackEvents="";
    s.tl(this,'e', s.eVar20+'_internal exit');
})
//17-1
$('div#unsub_top input').one('click',function(){
    s.eVar30='unsubscribe';
    s.linkTrackVars='eVar30,events'+','+scLinkCustVars;
    s.events=s.linkTrackEvents="event39";
    s.tl(this,'e', s.eVar20+'_form touched');
    localStorage.removeItem('unsubscribe');
})
</script>