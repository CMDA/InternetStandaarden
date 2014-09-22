function ULSHf2(){var o=new Object;o.ULSTeamName="CMS";o.ULSFileName="MediaPlayer.js";return o;}
// _lcid="1033" _version="14.0.4750"
// _localBinding
// Version: "14.0.4750"
// Copyright (c) Microsoft Corporation.  All rights reserved.
if (!window.Silverlight) {
	window.Silverlight={};
}
Silverlight._silverlightCount=0;
Silverlight.fwlinkRoot='http://go2.microsoft.com/fwlink/?LinkID=';
Silverlight.onGetSilverlight=null;
Silverlight.onSilverlightInstalled=function() {ULSHf2:; window.location.reload(false); };
Silverlight.isInstalled=function(version) {ULSHf2:;
	var isVersionSupported=false;
	var container=null;
	try {
		var control=null;
		try {
			control=new ActiveXObject('AgControl.AgControl');
			if (version==null) {
				isVersionSupported=true;
			}
			else if (control.IsVersionSupported(version)) {
				isVersionSupported=true;
			}
			control=null;
		}
		catch (e) {
			var plugin=navigator.plugins["Silverlight Plug-In"];
			if (plugin) {
				if (version===null) {
					isVersionSupported=true;
				}
				else {
					var actualVer=plugin.description;
					if (actualVer==="1.0.30226.2")
						actualVer="2.0.30226.2";
					var actualVerArray=actualVer.split(".");
					while (actualVerArray.length > 3) {
						actualVerArray.pop();
					}
					while (actualVerArray.length < 4) {
						actualVerArray.push(0);
					}
					var reqVerArray=version.split(".");
					while (reqVerArray.length > 4) {
						reqVerArray.pop();
					}
					var requiredVersionPart;
					var actualVersionPart
					var index=0;
					do {
						requiredVersionPart=parseInt(reqVerArray[index]);
						actualVersionPart=parseInt(actualVerArray[index]);
						index++;
					}
					while (index < reqVerArray.length && requiredVersionPart===actualVersionPart);
					if (requiredVersionPart <=actualVersionPart && !isNaN(requiredVersionPart)) {
						isVersionSupported=true;
					}
				}
			}
		}
	}
	catch (e) {
		isVersionSupported=false;
	}
	if (container) {
		document.body.removeChild(container);
	}
	return isVersionSupported;
}
Silverlight.WaitForInstallCompletion=function() {ULSHf2:;
	if (!Silverlight.isBrowserRestartRequired && Silverlight.onSilverlightInstalled) {
		try {
			navigator.plugins.refresh();
		}
		catch (e) {
		}
		if (Silverlight.isInstalled(null)) {
			Silverlight.onSilverlightInstalled();
		}
		else {
			setTimeout(Silverlight.WaitForInstallCompletion, 3000);
		}
	}
}
Silverlight.__startup=function() {ULSHf2:;
	Silverlight.isBrowserRestartRequired=Silverlight.isInstalled(null);
	if (!Silverlight.isBrowserRestartRequired) {
		Silverlight.WaitForInstallCompletion();
	}
	if (window.removeEventListener) {
		window.removeEventListener('load', Silverlight.__startup, false);
	}
	else {
		window.detachEvent('onload', Silverlight.__startup);
	}
}
if (window.addEventListener) {
	window.addEventListener('load', Silverlight.__startup, false);
}
else {
	window.attachEvent('onload', Silverlight.__startup);
}
Silverlight.createObject=function(source, parentElement, id, properties, events, initParams, userContext) {ULSHf2:;
	var slPluginHelper=new Object();
	var slProperties=properties;
	var slEvents=events;
	slPluginHelper.version=slProperties.version;
	slProperties.source=source;
	slPluginHelper.alt=slProperties.alt;
	if (initParams)
		slProperties.initParams=initParams;
	if (slProperties.isWindowless && !slProperties.windowless)
		slProperties.windowless=slProperties.isWindowless;
	if (slProperties.framerate && !slProperties.maxFramerate)
		slProperties.maxFramerate=slProperties.framerate;
	if (id && !slProperties.id)
		slProperties.id=id;
	delete slProperties.ignoreBrowserVer;
	delete slProperties.inplaceInstallPrompt;
	delete slProperties.version;
	delete slProperties.isWindowless;
	delete slProperties.framerate;
	delete slProperties.data;
	delete slProperties.src;
	delete slProperties.alt;
	if (Silverlight.isInstalled(slPluginHelper.version)) {
		for (var name in slEvents) {
			if (slEvents[name]) {
				if (name=="onLoad" && typeof slEvents[name]=="function" && slEvents[name].length !=1) {
					var onLoadHandler=slEvents[name];
					slEvents[name]=function(sender) {ULSHf2:; return onLoadHandler(document.getElementById(id), userContext, sender) };
				}
				var handlerName=Silverlight.__getHandlerName(slEvents[name]);
				if (handlerName !=null) {
					slProperties[name]=handlerName;
					slEvents[name]=null;
				}
				else {
					throw "typeof events."+name+" must be 'function' or 'string'";
				}
			}
		}
		slPluginHTML=Silverlight.buildHTML(slProperties);
	}
	else if(typeof(g_AllowSilverlightPrompt) !="undefined" && !g_AllowSilverlightPrompt) {
		slPluginHTML="";
	}
	else {
		slPluginHTML=Silverlight.buildPromptHTML(slPluginHelper);
	}
	if (parentElement) {
		parentElement.innerHTML=slPluginHTML;
	}
	else {
		return slPluginHTML;
	}
}
Silverlight.buildHTML=function(slProperties) {ULSHf2:;
	var htmlBuilder=[];
	htmlBuilder.push('<object type=\"application/x-silverlight\" data="data:application/x-silverlight,"');
	if (slProperties.id !=null) {
		htmlBuilder.push(' id="'+slProperties.id+'"');
	}
	if (slProperties.width !=null) {
		htmlBuilder.push(' width="'+slProperties.width+'"');
	}
	if (slProperties.height !=null) {
		htmlBuilder.push(' height="'+slProperties.height+'"');
	}
	htmlBuilder.push(' >');
	delete slProperties.id;
	delete slProperties.width;
	delete slProperties.height;
	for (var name in slProperties) {
		if (slProperties[name]) {
			htmlBuilder.push('<param name="'+Silverlight.HtmlAttributeEncode(name)+'" value="'+Silverlight.HtmlAttributeEncode(slProperties[name])+'" />');
		}
	}
	htmlBuilder.push('<\/object>');
	return htmlBuilder.join('');
}
Silverlight.createObjectEx=function(params) {ULSHf2:;
	var parameters=params;
	var html=Silverlight.createObject(parameters.source, parameters.parentElement, parameters.id, parameters.properties, parameters.events, parameters.initParams, parameters.context);
	if (parameters.parentElement==null) {
		return html;
	}
}
Silverlight.buildPromptHTML=function(slPluginHelper) {ULSHf2:;
	var slPluginHTML="";
	var urlRoot=Silverlight.fwlinkRoot;
	var shortVer=slPluginHelper.version;
	if (slPluginHelper.alt) {
		slPluginHTML=slPluginHelper.alt;
	}
	else {
		if (!shortVer) {
			shortVer="";
		}
		slPluginHTML="<a href='javascript:Silverlight.getSilverlight(\"{1}\");' style='text-decoration: none;'><img src='{2}' alt='Get Microsoft Silverlight' style='border-style: none'/></a>";
		slPluginHTML=slPluginHTML.replace('{1}', shortVer);
		slPluginHTML=slPluginHTML.replace('{2}', urlRoot+'108181');
	}
	return slPluginHTML;
}
Silverlight.getSilverlight=function(version) {ULSHf2:;
	if (Silverlight.onGetSilverlight) {
		Silverlight.onGetSilverlight();
	}
	var shortVer="";
	var reqVerArray=String(version).split(".");
	if (reqVerArray.length > 1) {
		var majorNum=parseInt(reqVerArray[0]);
		if (isNaN(majorNum) || majorNum < 2) {
			shortVer="1.0";
		}
		else {
			shortVer=reqVerArray[0]+'.'+reqVerArray[1];
		}
	}
	var verArg="";
	if (shortVer.match(/^\d+\056\d+$/)) {
		verArg="&v="+shortVer;
	}
	Silverlight.followFWLink("114576"+verArg);
}
Silverlight.followFWLink=function(linkid) {ULSHf2:;
	top.location=Silverlight.fwlinkRoot+String(linkid);
}
Silverlight.HtmlAttributeEncode=function(strInput) {ULSHf2:;
	var c;
	var retVal='';
	if (strInput==null) {
		return null;
	}
	for (var cnt=0; cnt < strInput.length; cnt++) {
		c=strInput.charCodeAt(cnt);
		if (((c > 96) && (c < 123)) ||
				  ((c > 64) && (c < 91)) ||
				  ((c > 43) && (c < 58) && (c !=47)) ||
				  (c==95)) {
			retVal=retVal+String.fromCharCode(c);
		}
		else {
			retVal=retVal+'&#'+c+';';
		}
	}
	return retVal;
}
Silverlight.default_error_handler=function(sender, args) {ULSHf2:;
	var iErrorCode;
	var errorType=args.ErrorType;
	iErrorCode=args.ErrorCode;
	var errMsg="\nSilverlight error message     \n";
	errMsg+="ErrorCode: "+iErrorCode+"\n";
	errMsg+="ErrorType: "+errorType+"       \n";
	errMsg+="Message: "+args.ErrorMessage+"     \n";
	if (errorType=="ParserError") {
		errMsg+="XamlFile: "+args.xamlFile+"     \n";
		errMsg+="Line: "+args.lineNumber+"     \n";
		errMsg+="Position: "+args.charPosition+"     \n";
	}
	else if (errorType=="RuntimeError") {
		if (args.lineNumber !=0) {
			errMsg+="Line: "+args.lineNumber+"     \n";
			errMsg+="Position: "+args.charPosition+"     \n";
		}
		errMsg+="MethodName: "+args.methodName+"     \n";
	}
	alert(errMsg);
}
Silverlight.__cleanup=function() {ULSHf2:;
	for (var i=Silverlight._silverlightCount - 1; i >=0; i--) {
		window['__slEvent'+i]=null;
	}
	Silverlight._silverlightCount=0;
	if (window.removeEventListener) {
		window.removeEventListener('unload', Silverlight.__cleanup, false);
	}
	else {
		window.detachEvent('onunload', Silverlight.__cleanup);
	}
}
Silverlight.__getHandlerName=function(handler) {ULSHf2:;
	var handlerName="";
	if (typeof handler=="string") {
		handlerName=handler;
	}
	else if (typeof handler=="function") {
		if (Silverlight._silverlightCount==0) {
			if (window.addEventListener) {
				window.addEventListener('onunload', Silverlight.__cleanup, false);
			}
			else {
				window.attachEvent('onunload', Silverlight.__cleanup);
			}
		}
		var count=Silverlight._silverlightCount++;
		handlerName="__slEvent"+count;
		window[handlerName]=handler;
	}
	else {
		handlerName=null;
	}
	return handlerName;
}
if (!window.mediaPlayer) window.mediaPlayer={};
if (!mediaPlayer.players) mediaPlayer.players={};
mediaPlayer.onError=function _mediaPlayer_onError(sender, args) {ULSHf2:;
	alert('Error: '+args.errorMessage+' ('+args.errorType+')');
}
mediaPlayer.createMediaPlayer=function _mediaPlayer_createPlayer(parentElement, id, width, height, playerParams, fallbackHTML, source, playerLoaded, playerResized) {ULSHf2:;
	var initParamString=null;
	if (playerParams) {
		var initParams=[];
		for (var name in playerParams) {
			if (playerParams[name]) {
				initParams.push(name+'='+playerParams[name]);
			}
		}
		initParamString=initParams.join(',');
	}
	Silverlight.createObjectEx({
		source: (source ? source : '/_layouts/clientbin/mediaplayer.xap'),
		parentElement: parentElement,
		id: id,
		properties: {
			version: '2.0',
			isWindowless: 'true',
			background: '#80808080',
			enableHtmlAccess: 'true',
			width: width ? width : '1',
			height: height ? height : '1'
		},
		events: {
			onload: function(source) {ULSHf2:; var objectElement=document.getElementById(id); mediaPlayer.players[id]=objectElement; if (playerLoaded) playerLoaded(objectElement); },
			onresize: function(source) {ULSHf2:; if (playerResized) playerResized(document.getElementById(id)); }
		},
		initParams: initParamString,
		fallbackHTML: fallbackHTML
	});
}
mediaPlayer.createOverlayPlayer=function _mediaPlayer_createOverlayPlayer(source, playerParams) {ULSHf2:;
	if (!mediaPlayer.overlayPlayerLoading)
		mediaPlayer.overlayPlayerLoading=true;
	else
		return;
	if (!playerParams)
		playerParams={};
	playerParams.isOverlayPlayer=true;
	playerParams.autoPlay=false;
	playerParams.loop=false;
	var playerWrapper=document.createElement('div');
	mediaPlayer.createMediaPlayer(playerWrapper, 'Silverlight_Shared_MediaPlayer', '1', '1',
	   playerParams, null, source);
	document.body.appendChild(playerWrapper);
}
mediaPlayer.getOverlayPlayer=function _mediaPlayer_getOverlayPlayer() {ULSHf2:;
	var objectElement=mediaPlayer.getOverlayPlayerElement();
	if (objectElement !=null)
		return objectElement.Content.MediaPlayer;
}
mediaPlayer.getOverlayPlayerElement=function _mediaPlayer_getOverlayPlayerElement() {ULSHf2:;
	return document.getElementById('Silverlight_Shared_MediaPlayer');
}
mediaPlayer.getMediaExtensions=function _mediaPlayer_getMediaExtensions() {
}
mediaPlayer.attachToMediaLinks=function _mediaPlayer_attachToMediaLinks(rootElement, silverlightMediaExtensions, templateSource, forceMediaTitleFromLinkTitle) {ULSHf2:;
	if (rootElement !=null && silverlightMediaExtensions !=null && silverlightMediaExtensions.length > 0) {
		var reString='';
		for (var i=0; i < silverlightMediaExtensions.length;++i) {
			if (i !=0) reString+='|';
			reString+='.'+silverlightMediaExtensions[i]+'$';
		}
		var links=rootElement.getElementsByTagName("a");
		for (var i=0; i < links.length;++i) {
			var re=new RegExp(reString);
			if (re.test(links[i].href)) {
				links[i].onclick=function(sender, args) {ULSHf2:;
					var overlayPlayer=mediaPlayer.getOverlayPlayer();
					if (templateSource !=null)
						overlayPlayer.TemplateSource=templateSource;
					overlayPlayer.MediaSource=this.href;
					if(forceMediaTitleFromLinkTitle)
					{
						overlayPlayer.MediaTitle=this.title;
					}
					else if (this.textContent)
						overlayPlayer.MediaTitle=this.textContent;
					else if (this.innerText)
						overlayPlayer.MediaTitle=this.innerText;
					else
						overlayPlayer.MediaTitle=this.title;
					overlayPlayer.DisplayMode="Overlay";
					overlayPlayer.Play();
					return false;
				};
			}
		}
	}
}
mediaPlayer.updateInputElement=function _mediaPlayer_updateInputElement(player) {ULSHf2:;
	var playerInterface=player.Content.MediaPlayer;
	var playerProperties={
		Title: playerInterface.MediaTitle,
		TemplateSource: playerInterface.TemplateSource,
		MediaSource: playerInterface.MediaSource,
		PreviewImageSource: playerInterface.PreviewImageSource,
		AutoPlay: player.autoPlay,
		Loop: playerInterface.Loop,
		InlineWidth: player.parentNode.style.width,
		InlineHeight: player.parentNode.style.height
	};
	player.parentNode.getElementsByTagName('input')[0].value=Sys.Serialization.JavaScriptSerializer.serialize(playerProperties);
}
mediaPlayer.getAssetUrl=function _mediaPlayer_getAssetUrl(player, propertyName) {ULSHf2:;
	EnsureScript('AssetPickers.js', typeof(AssetPickerConfig),
		function() {ULSHf2:;
			currentValue=player.Content.MediaPlayer[propertyName];
			var assetPickerValue=document.createElement('input');
			assetPickerValue.type='hidden';
			assetPickerValue.id='mediaPlayerUrl';
			assetPickerValue.value=currentValue;
			document.body.appendChild(assetPickerValue);
			var configObj=new AssetPickerConfig('');
			configObj.ClientID='asset_'+player.id;
			configObj.CurrentWebBaseUrl=SP.PageContextInfo.get_webServerRelativeUrl();
			configObj.AllowExternalUrls=true;
			configObj.ManageHyperlink=false;
			configObj.AssetUrlClientID=assetPickerValue.id;
			configObj.ReturnCallback=mediaPlayer.getAssetUrlCallback;
			configObj.MediaPlayer=player;
			configObj.MediaPlayerPropertyName=propertyName;
			if (propertyName=="MediaSource")
			{
				configObj.ReturnItemFields='Title,VideoWidthInPixels,VideoHeightInPixels,AlternateThumbnailUrl';
				configObj.APDExts=mediaPlayer.silverlightMediaExtensions;
				configObj.AssetType="Media";
			}
			var assetObj=new ImageAsset(currentValue);
			assetObj.LaunchModalAssetPicker(configObj);
		});
}
mediaPlayer.getAssetUrlCallback=function _mediaPlayer_getAssetUrlCallback(assetUrl, assetText, config, assetData) {ULSHf2:;
	config.MediaPlayer.Content.MediaPlayer[config.MediaPlayerPropertyName]=assetUrl;
	if (assetData.ListItemFields)
	{
		if (assetData.ListItemFields.Title)
			config.MediaPlayer.Content.MediaPlayer.MediaTitle=assetData.ListItemFields.Title;
		if (assetData.ListItemFields.ImageWidth)
			config.MediaPlayer.ParentNode.Style.Width=assetData.ListItemFields.VideoWidthInPixels+'px';
		if (assetData.ListItemFields.ImageHeight)
			config.MediaPlayer.ParentNode.Style.Height=assetData.ListItemFields.VideoHeightInPixels+'px';
		if (assetData.ListItemFields && assetData.ListItemFields.AlternateThumbnailUrl)
			config.MediaPlayer.Content.MediaPlayer.PreviewImageSource=assetData.ListItemFields.AlternateThumbnailUrl.split(',')[0];
	}
	mediaPlayer.updateInputElement(config.MediaPlayer);
	RefreshCommandUI();
}
if( typeof(Sys) !="undefined" && Sys && Sys.Application )
{
   Sys.Application.notifyScriptLoaded();
}
if (typeof(NotifyScriptLoadedAndExecuteWaitingJobs) !="undefined")
{
	NotifyScriptLoadedAndExecuteWaitingJobs("mediaplayer.js");
}

