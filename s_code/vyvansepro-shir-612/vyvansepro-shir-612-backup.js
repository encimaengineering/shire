var getTitle = $(this).closest('.listing').find("h4").first();

$(this).parent().closest('h4');


//23-7
$('div.box div.description a.link').on('click',function(){
    var scLink=$(this).text().toLowerCase();
    var scLVal='';
    var scLFVal='';
    if(typeof(scLink)!="undefined"){
        if(scLink=='download'){
            scLFVal=$(this).closest('.description').find('h4').text();
            scLVal=$(this).attr('href');
            console.log(scLVal);
            console.log(scLFVal);
            if(!!scLVal && !!scLFVal){
            	if(scLVal=="/documents/Adult-Binge-Eating-Disorder-Patient-Screener.pdf"){scLVal="bed screener pdf";}
            	else if(scLVal=="/documents/Discussion-Guide-for-Adult-Patients-with-Binge-Eating-Disorder.pdf"){scLVal="physician discussion guide pdf";}
            	else(scLVal=scLFval);
            }
        s.linkTrackVars="eVar20,events"+','+scLinkCustVars;
        s.linkTrackEvents=s.events='event4';
        s.eVar20=scLVal;
        s.tl(this,'d',"download_"+scLVal);
        }
    }
})


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
s.thisDomain				= getDomainWithoutWWWorM(location.toString());
if (document.referrer) {
	s.referrer				= document.referrer.toLowerCase();
	s.referrerFullDomain	= getFullDomain(s.referrer);
	s.referrerDomain		= getDomainWithoutWWWorM(s.referrer);
	s.isSameDomain			= s.referrerDomain == s.thisDomain ? true : false;
	s.refPath				= s.referrer.toLowerCase().match(/(?:.com\/)(hcp|teens|kids)(?:\b|\/)/);
	s.refPath				= s.refPath && s.refPath.length > 1 ? s.refPath[1].toString().replace('/','') : false;
	s.sitePath				= location.pathname.toLowerCase().match(/(hcp|teens|kids)(?:\b|\/)/);
	s.sitePath				= s.sitePath && s.sitePath.length > 1 ? s.sitePath[1].toString().replace('/','') : false;
	if (!s.isSameDomain || s.refPath != s.sitePath) {
		// If the referrer is not a partner site
		if (s.linkInternalFilters.indexOf(s.referrerDomain) == -1) {
			// Set last-touch referrer variables
			s.prop37 = s.referrerDomain;
			s.eVar37 = "D=c37";
			s.prop38 = "D=r";
			s.eVar38 = "D=r";
		}
		else if (s.thisDomain != "shireregistration.com" || !s.getQueryParam('s_vi') && !s.getQueryParam('s_fid')) { // If either s_vi or s_fid is in the URL, then this site tracks as part of the calling site
			// Referrer is a partner site. Determine which one it is and set Internal Referrer marketing channel.
			for (var i = 0; i < s.internalDomains.length; i++) {
				if (s.referrerFullDomain.indexOf(s.internalDomains[i]) > -1 && !!s.getValOnce(s.referrerDomain+'/'+s.refPath+"Internal Referrer", 's_cm', 1/48)) {
					// The getValOnce call in the if statement above updates channelManager's cookie with this new channel.
					// If this is the same channel the user entered through last time this code block does not execute and s._channel is empty.
					s.eVar3 = !!s.refPath ? s.referrerFullDomain+"/"+s.refPath : s.referrerFullDomain; // Internal site referral
					// Set marketing channel variables. channelManager will not run if referrer is in linkInternalReferrers.
					s._channel = s.eVar4 = "Internal Referrer";
					s.eVar25 = s.eVar26 = s.eVar27 = s.eVar28 = s.eVar29 = s.prop37 = s.eVar37 = s.prop38 = s.eVar38 = "D=v4";
					s.campaign = s.eVar13 = s.prop5 = "Internal Referrer: " + s.eVar3; // campaign undefined : undefined
					s.eVar5 = s.stackKeepFirst(s.eVar4, 's_eVar5', ' > ', '5', '1825');
					s.eVar7 = s.eVar8 = s.eVar42 = s.eVar44 = "Other Channel";
					s.eVar9 = "D=pageName";
					s.eVar48 = "D=g";
					break;
				}
			}
		}
	}
	s.prop42 = "D=r";
}
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