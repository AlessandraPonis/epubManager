/*!
* @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014
* @version 4.0.0
* bootstrap-fileinput
* For more JQuery Plugins visit http://plugins.krajee.com
*/!function(e){var t=function(e){var i,t=document.createElement("div");return t.innerHTML="<!--[if IE "+e+"]><i></i><![endif]-->",i=1==t.getElementsByTagName("i").length,document.body.appendChild(t),t.parentNode.removeChild(t),i},n=function(){return window.File&&window.FileReader},a=function(){var e=document.createElement("div");return!t(9)&&("draggable"in e||"ondragstart"in e&&"ondrop"in e)},r=function(){return n&&window.FormData},l=function(e,i){e.removeClass(i).addClass(i)},o='style="width:{width};height:{height};"',s='      <param name="controller" value="true" />\n      <param name="allowFullScreen" value="true" />\n      <param name="allowScriptAccess" value="always" />\n      <param name="autoPlay" value="false" />\n      <param name="autoStart" value="false" />\n      <param name="quality" value="high" />\n',d='<div class="file-preview-other">\n       <i class="glyphicon glyphicon-file"></i>\n   </div>',c={removeIcon:'<i class="glyphicon glyphicon-trash text-danger"></i>',removeClass:"btn btn-xs btn-default",removeTitle:"Remove file",uploadIcon:'<i class="glyphicon glyphicon-upload text-info"></i>',uploadClass:"btn btn-xs btn-default",uploadTitle:"Upload file",indicatorNew:'<i class="glyphicon glyphicon-hand-down text-warning"></i>',indicatorSuccess:'<i class="glyphicon glyphicon-ok-sign file-icon-large text-success"></i>',indicatorError:'<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',indicatorLoading:'<i class="glyphicon glyphicon-hand-up text-muted"></i>',indicatorNewTitle:"Not uploaded yet",indicatorSuccessTitle:"Uploaded",indicatorErrorTitle:"Upload Error",indicatorLoadingTitle:"Uploading ..."},p={main1:'{preview}\n<div class="kv-upload-progress hide"></div>\n<div class="input-group {class}">\n   {caption}\n   <div class="input-group-btn">\n       {remove}\n       {cancel}\n       {upload}\n       {browse}\n   </div>\n</div>',main2:'{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n',preview:'<div class="file-preview {class}">\n    <div class="close fileinput-remove">&times;</div>\n    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>',icon:'<span class="glyphicon glyphicon-file kv-caption-icon"></span>',caption:'<div tabindex="-1" class="form-control file-caption {class}">\n   <div class="file-caption-name"></div>\n</div>',modal:'<div id="{id}" class="modal fade">\n  <div class="modal-dialog modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h3 class="modal-title">Detailed Preview <small>{title}</small></h3>\n      </div>\n      <div class="modal-body">\n        <textarea class="form-control" style="font-family:Monaco,Consolas,monospace; height: {height}px;" readonly>{body}</textarea>\n      </div>\n    </div>\n  </div>\n</div>',progress:'<div class="progress">\n    <div class="progress-bar progress-bar-success progress-bar-striped text-center" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {percent}%\n     </div>\n</div>',footer:'<div class="file-thumbnail-footer">\n    <div class="file-caption-name" style="width:{width}">{caption}</div>\n    {actions}\n</div>',actions:'<div class="file-actions">\n    <div class="file-footer-buttons">\n        {upload}{delete}    </div>\n    <div class="file-upload-indicator" tabindex="-1" title="{indicatorTitle}">{indicator}</div>\n    <div class="clearfix"></div>\n</div>',actionDelete:'<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}"{dataUrl}{dataKey}>{removeIcon}</button>\n',actionUpload:'<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>\n'},f=["image","html","text","video","audio","flash","object"],u={generic:'<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   {content}\n   {footer}\n</div>\n',html:'<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n    <object data="{data}" type="{type}" width="{width}" height="{height}">\n       '+d+"\n    </object>\n   {footer}\n</div>",image:'<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <img src="{data}" class="file-preview-image" title="{caption}" alt="{caption}" '+o+">\n   {footer}\n</div>\n",text:'<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <div class="file-preview-text" title="{caption}" '+o+">\n       {data}\n   </div>\n   {footer}\n</div>\n",video:'<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+o+'>\n   <video width="{width}" height="{height}" controls>\n       <source src="{data}" type="{type}">\n       '+d+"\n   </video>\n   {footer}\n</div>\n",audio:'<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+o+'>\n   <audio controls>\n       <source src="{data}" type="{type}">\n       '+d+"\n   </audio>\n   {footer}\n</div>\n",flash:'<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+o+'>\n   <object type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n'+s+"       "+d+"\n   </object>\n   {footer}\n</div>\n",object:'<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+o+'>\n    <object data="{data}" type="{type}" width="{width}" height="{height}">\n      <param name="movie" value="{caption}" />\n'+s+"           "+d+"\n   </object>\n   {footer}\n</div>",other:'<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+o+">\n   "+d+"\n   {footer}\n</div>"},v={image:{width:"auto",height:"160px"},html:{width:"213px",height:"160px"},text:{width:"160px",height:"160px"},video:{width:"213px",height:"160px"},audio:{width:"213px",height:"80px"},flash:{width:"213px",height:"160px"},object:{width:"160px",height:"160px"},other:{width:"160px",height:"160px"}},g={image:function(e,i){return"undefined"!=typeof e?e.match("image.*"):i.match(/\.(gif|png|jpe?g)$/i)},html:function(e,i){return"undefined"!=typeof e?"text/html"==e:i.match(/\.(htm|html)$/i)},text:function(e,i){return"undefined"!=typeof e&&e.match("text.*")||i.match(/\.(txt|md|csv|nfo|php|ini)$/i)},video:function(e,i){return"undefined"!=typeof e&&e.match(/\.video\/(ogg|mp4|webm)$/i)||i.match(/\.(og?|mp4|webm)$/i)},audio:function(e,i){return"undefined"!=typeof e&&e.match(/\.audio\/(ogg|mp3|wav)$/i)||i.match(/\.(ogg|mp3|wav)$/i)},flash:function(e,i){return"undefined"!=typeof e&&"application/x-shockwave-flash"==e||i.match(/\.(swf)$/i)},object:function(){return!0},other:function(){return!0}},h=function(i,t){return null===i||void 0===i||i==[]||""===i||t&&""===e.trim(i)},m=function(e){return Array.isArray(e)||"[object Array]"===Object.prototype.toString.call(e)},w=function(e,i){return"object"==typeof i&&e in i},b=function(i,t,n){return h(i)||h(i[t])?n:e(i[t])},C=function(){return Math.round((new Date).getTime()+100*Math.random())},y=function(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},$=window.URL||window.webkitURL,x=function(i,a){this.$element=e(i),n()||t(9)?(this.init(a),this.listen()):this.$element.removeClass("file-loading")};x.prototype={constructor:x,init:function(i){var n=this,o=n.$element;for(key in i)n[key]=i[key];h(n.allowedPreviewTypes)&&(n.allowedPreviewTypes=f),n.uploadFileAttr=h(o.attr("name"))?"file_data":o.attr("name"),n.reader=null,n.isIE9=t(9),n.isIE10=t(10),n.filestack=[],n.ajaxRequests=[],n.isError=!1,n.dropZoneEnabled=a()&&n.dropZoneEnabled,n.isDisabled=n.$element.attr("disabled")||n.$element.attr("readonly"),n.isUploadable=r&&!h(n.uploadUrl),n.slug="function"==typeof i.slugCallback?i.slugCallback:n.slugDefault,n.mainTemplate=n.getLayoutTemplate(n.showCaption?"main1":"main2"),n.captionTemplate=n.getLayoutTemplate("caption"),n.previewGenericTemplate=n.getPreviewTemplate("generic"),h(n.$element.attr("id"))&&n.$element.attr("id",C()),"undefined"==typeof n.$container?n.$container=n.createContainer():n.refreshContainer(),n.$progress=n.$container.find(".kv-upload-progress"),n.$btnUpload=n.$container.find(".kv-fileinput-upload"),n.$captionContainer=b(i,"elCaptionContainer",n.$container.find(".file-caption")),n.$caption=b(i,"elCaptionText",n.$container.find(".file-caption-name")),n.$previewContainer=b(i,"elPreviewContainer",n.$container.find(".file-preview")),n.$preview=b(i,"elPreviewImage",n.$container.find(".file-preview-thumbnails")),n.$previewStatus=b(i,"elPreviewStatus",n.$container.find(".file-preview-status")),n.$errorContainer=b(i,"elErrorContainer",n.$previewContainer.find(".kv-fileinput-error")),h(n.msgErrorClass)||l(n.$errorContainer,n.msgErrorClass),n.$errorContainer.hide(),n.initialPreviewContent="";var s=n.initialPreview;n.initialPreviewCount=m(s)?s.length:s.length>0?s.split(n.initialPreviewDelimiter).length:0,n.fileActionSettings=e.extend(c,i.fileActionSettings),n.previewInitId="preview-"+C(),n.initPreview(),n.initPreviewDeletes(),n.original={preview:n.$preview.html(),caption:n.$caption.html()},n.autoSizeCaption(),n.options=i,n.setFileDropZoneTitle(),n.uploadCount=0,n.uploadPercent=0,n.$element.removeClass("file-loading")},getLayoutTemplate:function(e){var i=this;return w(e,i.layoutTemplates)?i.layoutTemplates[e]:p[e]},getPreviewTemplate:function(e){var i=this;return w(e,i.previewTemplates)?i.previewTemplates[e]:u[e]},listen:function(){var i=this,t=i.$element,n=i.$captionContainer,a=i.$btnFile;t.on("change",e.proxy(i.change,i)),e(window).on("resize",function(){setTimeout(function(){i.autoSizeCaption()},100)}),a.on("click",function(){i.$element.trigger("filebrowse"),i.isError&&!i.isUploadable&&i.clear(!1),n.focus()}),t.closest("form").on("reset",e.proxy(i.reset,i)),i.$container.on("click",".fileinput-remove:not([disabled])",e.proxy(i.clear,i)),i.$container.on("click",".fileinput-cancel",e.proxy(i.cancel,i)),i.isUploadable&&i.dropZoneEnabled&&i.showPreview&&i.initDragDrop(),i.isUploadable&&i.$container.find(".kv-fileinput-upload").on("click",function(t){if(i.isUploadable){t.preventDefault();var n=i.getFileStack().length;if(!i.isDisabled&&!e(this).hasClass("disabled")&&h(e(this).attr("disabled"))&&0!=n){i.resetUpload(),i.$progress.removeClass("hide"),i.uploadCount=0,i.uploadPercent=0;{var a,r=i.filestack.length;i.getLayoutTemplate("progress")}setTimeout(function(){if(i.lock(),i.setProgress(0),!i.uploadAsync&&1!=n||!i.showPreview)i.uploadBatch();else for(a=0;r>a;a++)void 0!==i.filestack[a]&&i.upload(a,!0)},100)}}})},setProgress:function(e){var i=this,t=i.getLayoutTemplate("progress"),n=Math.min(e,100);i.$progress.html(t.replace(/\{percent\}/g,n))},lock:function(){var e=this;e.resetErrors(),e.disable(),e.showRemove&&l(e.$container.find(".fileinput-remove"),"hide"),e.showCancel&&e.$container.find(".fileinput-cancel").removeClass("hide"),e.$element.trigger("filelock",[e.filestack])},unlock:function(){var e=this;e.enable(),e.showCancel&&l(e.$container.find(".fileinput-cancel"),"hide"),e.showRemove&&e.$container.find(".fileinput-remove").removeClass("hide"),e.$element.trigger("fileunlock",[e.filestack])},refresh:function(i){var t=this,n=t.$element,a=arguments.length?e.extend(t.options,i):t.options;n.off(),t.init(a);var r=t.$container.find(".file-drop-zone");n.on("change",e.proxy(t.change,t)),r.off("dragenter dragover drop"),t.$(document).off("dragenter dragover drop"),t.setFileDropZoneTitle()},initDragDrop:function(){var i=this,t=i.$container.find(".file-drop-zone");t.off("dragenter dragover drop"),e(document).off("dragenter dragover drop"),t.on("dragenter dragover",function(t){t.stopPropagation(),t.preventDefault(),i.isDisabled||l(e(this),"highlighted")}),t.on("dragleave",function(t){t.stopPropagation(),t.preventDefault(),i.isDisabled||e(this).removeClass("highlighted")}),t.on("drop",function(t){t.preventDefault(),i.isDisabled||(i.change(t,"dragdrop"),e(this).removeClass("highlighted"))}),e(document).on("dragenter dragover drop",function(e){e.stopPropagation(),e.preventDefault()})},setFileDropZoneTitle:function(){var e=this,i=e.$container.find(".file-drop-zone");i.find("."+e.dropZoneTitleClass).remove(),e.isUploadable&&e.showPreview&&0!=i.length&&!(e.getFileStack().length>0)&&e.dropZoneEnabled&&(0==i.find(".file-preview-frame").length&&i.prepend('<div class="'+e.dropZoneTitleClass+'">'+e.dropZoneTitle+"</div>"),e.$container.removeClass("file-input-new"))},initFileActions:function(){var i=this;i.$preview.find(".kv-file-remove").each(function(){var t=e(this),n=t.closest(".file-preview-frame"),a=n.attr("data-fileindex");t.off("click").on("click",function(){n.fadeOut("slow",function(){i.filestack[a]=void 0,i.clearObjects(n),n.remove();var e=i.getFileStack(),t=e.length,r=i.$container.find(".file-preview-initial").length;if(0==t&&0==r)i.original.preview="",i.reset();else{var l=i.initialPreviewCount+t,o=l>1?i.msgSelected.replace(/\{n\}/g,l):e[0].name;i.setCaption(o)}})})}),i.$preview.find(".kv-file-upload").each(function(){var t=e(this);t.off("click").on("click",function(){var e=t.closest(".file-preview-frame"),n=e.attr("data-fileindex");i.upload(n)})})},renderInitFileFooter:function(e){var i=this,t=i.initialPreviewConfig.length>0,n=i.getLayoutTemplate("footer");if(t&&!h(i.initialPreviewConfig[e])){var a=i.initialPreviewConfig[e],r="caption"in a?a.caption:"",l="width"in a?a.width:"auto",o="url"in a?a.url:!1,s="key"in a?a.key:null,d=o===!1?!0:!1,c=i.initialPreviewShowDelete?i.renderFileActions(!1,!0,d,o,s):"",p=n.replace(/\{actions\}/g,c);return p.replace(/\{caption\}/g,r).replace(/\{width\}/g,l).replace(/\{indicator\}/g,"").replace(/\{indicatorTitle\}/g,"")}return""},renderFileFooter:function(e,i){var t=this,n=t.fileActionSettings,a=t.getLayoutTemplate("footer");if(t.isUploadable){var r=a.replace(/\{actions\}/g,t.renderFileActions(!0,!0,!1,!1,!1));return r.replace(/\{caption\}/g,e).replace(/\{width\}/g,i).replace(/\{indicator\}/g,n.indicatorNew).replace(/\{indicatorTitle\}/g,n.indicatorNewTitle)}return a.replace(/\{actions\}/g,"").replace(/\{caption\}/g,e).replace(/\{width\}/g,i).replace(/\{indicator\}/g,"").replace(/\{indicatorTitle\}/g,"")},renderFileActions:function(e,i,t,n,a){if(!e&&!i)return"";var r=this,l=0==n?"":' data-url="'+n+'"',o=0==a?"":' data-key="'+a+'"',s=r.getLayoutTemplate("actionDelete"),d="",c=r.getLayoutTemplate("actions"),p=r.fileActionSettings,f=t?p.removeClass+" disabled":p.removeClass;return s=s.replace(/\{removeClass\}/g,f).replace(/\{removeIcon\}/g,p.removeIcon).replace(/\{removeTitle\}/g,p.removeTitle).replace(/\{dataUrl\}/g,l).replace(/\{dataKey\}/g,o),e&&(d=r.getLayoutTemplate("actionUpload").replace(/\{uploadClass\}/g,p.uploadClass).replace(/\{uploadIcon\}/g,p.uploadIcon).replace(/\{uploadTitle\}/g,p.uploadTitle)),c.replace(/\{delete\}/g,s).replace(/\{upload\}/g,d)},getInitialPreview:function(e,i,t){var n=this,a="init_"+t,r=n.previewInitId+"-"+a;return footer=n.renderInitFileFooter(t,!1),e.replace(/\{previewId\}/g,r).replace(/\{frameClass\}/g," file-preview-initial").replace(/\{fileindex\}/g,a).replace(/\{content\}/g,i).replace(/\{footer\}/g,footer)},initPreview:function(){{var e=this,i="",t=e.initialPreview,n=e.initialPreviewCount,a=e.initialCaption.length;e.previewInitId+"-init_"+r}if(caption=a>0?e.initialCaption:e.msgSelected.replace(/\{n\}/g,n),m(t)&&n>0){for(var r=0;n>r;r++)i+=e.getInitialPreview(e.previewGenericTemplate,t[r],r);n>1&&0==a&&(caption=e.msgSelected.replace(/\{n\}/g,n))}else{if(!(n>0))return a>0?void e.setCaption(caption):void 0;for(var r=(t.split(e.initialPreviewDelimiter),0);n>r;r++)i+=e.getInitialPreview(e.previewGenericTemplate,t[r],r);n>1&&0==a&&(caption=e.msgSelected.replace(/\{n\}/g,n))}e.initialPreviewContent=i,e.$preview.html(i),e.setCaption(caption),e.$container.removeClass("file-input-new")},initPreviewDeletes:function(){var i=this,t=function(){0==i.$preview.find(".kv-file-remove").length&&i.reset()};i.$preview.find(".kv-file-remove").each(function(){{var n=e(this),a=n.closest(".file-preview-frame"),r=n.attr("data-url"),o=n.attr("data-key");e(i.initialPreviewContent)}void 0!==r&&void 0!==o&&n.off("click").on("click",function(){e.ajax({url:r,type:"POST",dataType:"json",data:{key:o},beforeSend:function(){l(a,"file-uploading"),l(n,"disabled"),i.$element.trigger("filepredelete",[o])},success:function(r){setTimeout(function(){"undefined"==typeof r.error?i.$element.trigger("filedeleted",[o]):(i.showError(r.error,null,n.attr("id"),key,"filedeleteerror"),t()),a.removeClass("file-uploading").addClass("file-deleted"),a.fadeOut("slow",function(){i.clearObjects(a),a.remove();var n=e(document.createElement("div")).html(i.original.preview);n.find(".file-preview-frame").each(function(){var i=e(this);i.find(".kv-file-remove").attr("data-key")==o&&i.remove()}),i.initialPreviewContent=n.html(),i.initialPreviewCount>0&&i.initialPreviewCount--;var r=i.initialCaption.length>0?i.initialCaption:i.msgSelected.replace(/\{n\}/g,i.initialPreviewCount);i.original.preview=n.html(),i.setCaption(r),i.original.caption=i.$caption.html(),n.remove(),t()})},100)},error:function(e,r,l){i.showError(l,null,n.attr("id"),key,"filedeleteerror"),a.removeClass("file-uploading"),t()}})})})},clearObjects:function(i){i.find("video audio").each(function(){this.pause(),delete this,e(this).remove()}),i.find("img object div").each(function(){delete this,e(this).remove()})},clearFileInput:function(){var i=this,t=i.$element;if(!h(t.val()))if(i.isIE9||i.isIE10){var n=t.closest("form"),a=e(document.createElement("form")),r=e(document.createElement("div"));t.before(r),n.length?n.after(a):r.after(a),a.append(t).trigger("reset"),r.before(t).remove(),a.remove()}else t.val("")},resetUpload:function(){var e=this;e.uploadCount=0,e.uploadPercent=0,e.$btnUpload.removeAttr("disabled"),e.setProgress(0),l(e.$progress,"hide"),e.resetErrors(!1),e.ajaxRequests=[]},cancel:function(){var t=this,n=t.ajaxRequests,a=n.length;if(a>0){for(i=0;a>i;i++)n[i].abort();t.$preview.find("file-preview-frame").each(function(){$thumb=e(this),ind=$thumb.attr("data-fileindex"),$thumb.removeClass("file-uploading"),void 0!==t.filestack[ind]&&($thumb.find(".kv-file-upload").removeClass("disabled"),$thumb.find(".kv-file-upload").removeClass("disabled"))}),t.unlock()}},clear:function(){var i=this,t=arguments.length&&arguments[0];if(!i.isIE9&&i.reader instanceof FileReader&&i.reader.abort(),i.$btnUpload.removeAttr("disabled"),i.resetUpload(),i.filestack=[],i.autoSizeCaption(),i.clearFileInput(),i.resetErrors(!0),t!==!1&&(i.$element.trigger("change"),i.$element.trigger("fileclear")),i.overwriteInitial&&(i.initialPreviewCount=0,i.initialPreviewContent=""),!i.overwriteInitial&&i.initialPreviewContent.length>0)i.showFileIcon(),i.$preview.html(i.original.preview),i.$caption.html(i.original.caption),i.initPreviewDeletes(),i.$container.removeClass("file-input-new");else{i.$preview.find(".file-preview-frame").each(function(){i.clearObjects(e(this))}),i.$preview.html("");var n=!i.overwriteInitial&&i.initialCaption.length>0?i.original.caption:"";i.$caption.html(n),i.$caption.attr("title",""),l(i.$container,"file-input-new")}0==i.$container.find(".file-preview-frame").length&&(i.initialCaption="",i.original.caption="",i.$caption.html(""),i.$captionContainer.find(".kv-caption-icon").hide()),i.hideFileIcon(),i.$element.trigger("filecleared"),i.$captionContainer.focus(),i.setFileDropZoneTitle()},reset:function(){var e=this;e.clear(!1),e.$preview.html(e.original.preview),e.$caption.html(e.original.caption),e.$container.find(".fileinput-filename").text(""),e.$element.trigger("filereset"),e.initialPreview.length>0&&e.$container.removeClass("file-input-new"),e.setFileDropZoneTitle(),e.isUploadable&&e.resetUpload(),e.filestack=[]},disable:function(){var e=this;e.isDisabled=!0,e.$element.attr("disabled","disabled"),e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"),e.$container.find(".btn-file, .fileinput-remove, .kv-fileinput-upload").attr("disabled",!0),e.initDragDrop()},enable:function(){var e=this;e.isDisabled=!1,e.$element.removeAttr("disabled"),e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"),e.$container.find(".btn-file, .fileinput-remove, .kv-fileinput-upload").removeAttr("disabled"),e.initDragDrop()},uploadExtra:function(i){var t=this;0!=t.uploadExtraData.length&&e.each(t.uploadExtraData,function(e,t){h(t.id)||h(t.value)||i.append(t.id,t.value)})},initXhr:function(e){var i=this;return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,n=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(n/a*98)),i.uploadPercent=Math.max(t,i.uploadPercent),i.setProgress(i.uploadPercent)},!1),e},upload:function(i){var t=this,n=t.getFileStack(),a=new FormData,r=t.previewInitId+"-"+i,o=e("#"+r),s=o.find(".kv-file-upload"),d=o.find(".kv-file-remove"),c=o.find(".file-upload-indicator"),p=t.fileActionSettings;if(!s.hasClass("disabled")){var f=n.length,u=arguments.length>1,v=function(e,i){c.html(p[e]),c.attr("title",p[i])},g=function(){if(0==t.$preview.find("file-uploading").length&&t.unlock(),u){t.uploadCount++;var e=f>0?Math.ceil(100*t.uploadCount/f):0;t.uploadPercent=Math.max(e,t.uploadPercent),t.setProgress(t.uploadPercent),t.initPreviewDeletes()}},h=function(){s.removeClass("disabled"),d.removeClass("disabled"),o.removeClass("file-uploading")};a.append(t.uploadFileAttr,n[i]),a.append("file_id",i),t.uploadExtra(a),t.ajaxRequests.push(e.ajax({xhr:function(){var i=e.ajaxSettings.xhr();return t.initXhr(i)},url:t.uploadUrl,type:"POST",dataType:"json",data:a,cache:!1,processData:!1,contentType:!1,beforeSend:function(){v("indicatorLoading","indicatorLoadingTitle"),l(o,"file-uploading"),l(s,"disabled"),l(d,"disabled"),u||t.lock(),t.$element.trigger("filepreupload",[a,r,i])},success:function(e){setTimeout(function(){"undefined"==typeof e.error?(v("indicatorSuccess","indicatorSuccessTitle"),s.hide(),d.hide(),t.filestack[i]=void 0,t.$element.trigger("fileuploaded",[a,r,i])):(v("indicatorError","indicatorErrorTitle"),t.showUploadError(e.error,a,r,i,"fileuploaderror")),g(),h()},100)},error:function(e,l,o){if(v("indicatorError","indicatorErrorTitle"),u){var s=n[i].name;t.showUploadError("<b>"+s+"</b>: "+o,a,r,i,"fileuploaderror")}else t.showUploadError(o,a,r,i,"fileuploaderror");g(),h()}}))}},uploadBatch:function(){var i=this,t=i.filestack,n=t.length,a=i.fileActionSettings;formdata=new FormData,setIndicator=function(t,n,r){$indicator=e("#"+i.previewInitId+"-"+t).find(".file-upload-indicator"),$indicator.html(a[n]),$indicator.attr("title",a[r])},setAllUploaded=function(){e.each(t,function(e){i.filestack[e]=void 0})},e.each(t,function(e){void 0!==t[e]&&formdata.append(i.uploadFileAttr,t[e])}),i.uploadExtra(formdata),e.ajax({xhr:function(){var t=e.ajaxSettings.xhr();return i.initXhr(t)},url:i.uploadUrl,type:"POST",dataType:"json",data:formdata,cache:!1,processData:!1,contentType:!1,beforeSend:function(){l(i.$preview.find(".file-preview-frame"),"file-uploading"),i.lock()},success:function(t){setTimeout(function(){var n=h(t.errorkeys)?[]:t.errorkeys;"undefined"==typeof t.error||h(t.error)?(setAllUploaded(),i.showPreview?(i.$preview.find(".kv-file-upload").hide(),i.$preview.find(".kv-file-remove").hide(),i.$preview.find(".file-preview-frame").each(function(){var i=e(this),t=i.attr("data-fileindex");setIndicator(t,"indicatorSuccess","indicatorSuccessTitle"),i.removeClass("file-uploading")})):i.reset()):(i.$preview.find(".file-preview-frame").each(function(){var t=e(this),a=t.attr("data-fileindex");if(0==n.length)return t.removeClass("file-uploading"),void setIndicator(a,"indicatorError","indicatorErrorTitle");if(e.inArray(a,n))setIndicator(a,"indicatorError","indicatorErrorTitle");else{var r=t.find(".kv-file-upload"),o=t.find(".kv-file-remove");l(r,"disabled"),l(o,"disabled"),r.hide(),o.hide(),t.removeClass("file-uploading"),setIndicator(a,"indicatorSuccess","indicatorSuccessTitle"),i.filestack[a]=void 0}}),i.showUploadError(t.error,formdata,null,null,"filebatchuploaderror"))},100)},complete:function(){i.setProgress(100),i.unlock()},error:function(e,t,a){i.showUploadError(a,formdata,null,null,"filebatchuploaderror"),i.uploadFileCount=n-1,i.$preview.find(".file-preview-frame").removeClass("file-uploading")}})},hideFileIcon:function(){this.overwriteInitial&&this.$captionContainer.find(".kv-caption-icon").hide()},showFileIcon:function(){this.$captionContainer.find(".kv-caption-icon").show()},resetErrors:function(e){var i=this,t=i.$errorContainer;i.isError=!1,i.$container.removeClass("has-error"),t.html(""),e?t.fadeOut("slow"):t.hide()},showUploadError:function(e,i,t,n){var a=this,r=a.$errorContainer,o=a.$element,s=arguments.length>4?arguments[4]:"fileerror";return 0==r.find("ul").length?r.html('<ul class="text-left"><li>'+e+"</li></ul>"):r.find("ul").append("<li>"+e+"</li>"),r.fadeIn(800),o.trigger(s,[i,t,n]),l(a.$container,"has-error"),!0},showError:function(e,i,t,n){var a=this,r=a.$errorContainer,o=a.$element,s=arguments.length>4?arguments[4]:"fileerror";return r.html(e),r.fadeIn(800),o.trigger(s,[i,t,n]),a.isUploadable||a.clearFileInput(),l(a.$container,"has-error"),a.$btnUpload.attr("disabled",!0),!0},errorHandler:function(e,i){var t=this;switch(e.target.error.code){case e.target.error.NOT_FOUND_ERR:t.addError(t.msgFileNotFound.replace(/\{name\}/g,i));break;case e.target.error.NOT_READABLE_ERR:t.addError(t.msgFileNotReadable.replace(/\{name\}/g,i));break;case e.target.error.ABORT_ERR:t.addError(t.msgFilePreviewAborted.replace(/\{name\}/g,i));break;default:t.addError(t.msgFilePreviewError.replace(/\{name\}/g,i))}},parseFileType:function(e){for(var i,t,n=0;n<f.length;n++)if(cat=f[n],i=w(cat,self.fileTypeSettings)?self.fileTypeSettings[cat]:g[cat],t=i(e.type,e.name)?cat:"",""!=t)return t;return"other"},previewDefault:function(i,t){var n=this;if(n.showPreview){var a=$.createObjectURL(i),r=e("#"+t),l=n.previewSettings.other,o=n.isUploadable?n.renderFileFooter(i.name,l.width):n.renderFileFooter(i.name,l.width,!1),s=n.getPreviewTemplate("other"),d=t.slice(t.lastIndexOf("-")+1),c="";if(arguments.length>2){{e(n.msgValidationError)}c=" btn disabled",o+='<div class="file-other-error text-danger"><i class="glyphicon glyphicon-exclamation-sign"></i></div>'}n.$preview.append("\n"+s.replace(/\{previewId\}/g,t).replace(/\{frameClass\}/g,c).replace(/\{fileindex\}/g,d).replace(/\{caption\}/g,n.slug(i.name)).replace(/\{width\}/g,l.width).replace(/\{height\}/g,l.height).replace(/\{type\}/g,i.type).replace(/\{data\}/g,a).replace(/\{footer\}/g,o)),r.on("load",function(){$.revokeObjectURL(r.attr("data"))})}},previewFile:function(e,i,t,n){var a=this;if(a.showPreview){var n,r,l=a.parseFileType(e),o=a.slug(e.name),s=a.allowedPreviewTypes,d=a.allowedPreviewMimeTypes,c=(e.type,w(l,a.previewTemplates)?a.previewTemplates[l]:u[l]),p=w(l,a.previewSettings)?a.previewSettings[l]:v[l],f=parseInt(a.wrapTextLength),g=a.wrapIndicator,m=a.$preview,b=s.indexOf(l)>=0,x=h(d)||!h(d)&&w(e.type,d),T=a.renderFileFooter(o,p.width),k=t.slice(t.lastIndexOf("-")+1);if(b&&x){if("text"==l){var F=y(i.target.result);if($.revokeObjectURL(n),F.length>f){var I="text-"+C(),P=.75*window.innerHeight,E=a.getLayoutTemplate("modal").replace(/\{id\}/g,I).replace(/\{title\}/g,o).replace(/\{height\}/g,P).replace(/\{body\}/g,F);g=g.replace(/\{title\}/g,o).replace(/\{dialog\}/g,"$('#"+I+"').modal('show')"),F=F.substring(0,f-1)+g}r=c.replace(/\{previewId\}/g,t).replace(/\{caption\}/g,o).replace(/\{frameClass\}/g,"").replace(/\{type\}/g,e.type).replace(/\{width\}/g,p.width).replace(/\{height\}/g,p.height).replace(/\{data\}/g,F).replace(/\{footer\}/g,T).replace(/\{fileindex\}/g,k)+E}else r=c.replace(/\{previewId\}/g,t).replace(/\{caption\}/g,o).replace(/\{frameClass\}/g,"").replace(/\{type\}/g,e.type).replace(/\{data\}/g,n).replace(/\{width\}/g,p.width).replace(/\{height\}/g,p.height).replace(/\{footer\}/g,T).replace(/\{fileindex\}/g,k);m.append("\n"+r),a.autoSizeImage(t)}else a.previewDefault(e,t)}},slugDefault:function(e){return h(e)?"":e.split(/(\\|\/)/g).pop().replace(/[^\w-.\\\/ ]+/g,"")},getFileStack:function(){var e=this;return e.filestack.filter(function(e){return void 0!=e})},readFiles:function(e){function i(g){if(h(n.attr("multiple"))&&(p=1),g>=p)return l.removeClass("loading"),void o.html("");var w,C,y,x,T,k=v+g,F=c+"-"+k,I=e[g],P=t.slug(I.name),E=(I.size?I.size:0)/1e3,S=$.createObjectURL(I),D=0,U=t.allowedFileTypes,L=h(U)?"":U.join(", "),j=t.allowedFileExtensions,A=h(j)?"":j.join(", "),R=h(j)?"":new RegExp("\\.("+j.join("|")+")$","i");if(E=E.toFixed(2),t.maxFileSize>0&&E>t.maxFileSize)return y=t.msgSizeTooLarge.replace(/\{name\}/g,P).replace(/\{size\}/g,E).replace(/\{maxSize\}/g,t.maxFileSize),void(t.isError=b(y,I,F,g));if(!h(U)&&m(U)){for(C=0;C<U.length;C++)x=U[C],w=f[x],T=void 0!==w&&w(I.type,P),D+=h(T)?0:T.length;if(0==D)return y=t.msgInvalidFileType.replace(/\{name\}/g,P).replace(/\{types\}/g,L),void(t.isError=b(y,I,F,g))}return 0!=D||h(j)||!m(j)||h(R)||(T=P.match(R),D+=h(T)?0:T.length,0!=D)?t.showPreview?(a.length>0&&"undefined"!=typeof FileReader?(o.html(s.replace(/\{index\}/g,g+1).replace(/\{files\}/g,p)),l.addClass("loading"),r.onerror=function(e){t.errorHandler(e,P)},r.onload=function(e){t.previewFile(I,e,F,S),t.initFileActions()},r.onloadend=function(){var e=d.replace(/\{index\}/g,g+1).replace(/\{files\}/g,p).replace(/\{percent\}/g,100).replace(/\{name\}/g,P);setTimeout(function(){o.html(e),$.revokeObjectURL(S)},100),setTimeout(function(){i(g+1),t.updateFileDetails(p)},100),n.trigger("fileloaded",[I,F,g])},r.onprogress=function(e){if(e.lengthComputable){var i=parseInt(e.loaded/e.total*100,10),t=d.replace(/\{index\}/g,g+1).replace(/\{files\}/g,p).replace(/\{percent\}/g,i).replace(/\{name\}/g,P);setTimeout(function(){o.html(t)},100)}},u(I.type,P)?r.readAsText(I):r.readAsArrayBuffer(I)):(t.previewDefault(I,F),setTimeout(function(){i(g+1),t.updateFileDetails(p)},100),n.trigger("fileloaded",[I,F,g])),void t.filestack.push(I)):(n.trigger("fileloaded",[I,F,g]),void setTimeout(i(g+1),100)):(y=t.msgInvalidFileExtension.replace(/\{name\}/g,P).replace(/\{extensions\}/g,A),void(t.isError=b(y,I,F,g)))}this.reader=new FileReader;var t=this,n=t.$element,a=t.$preview,r=t.reader,l=t.$previewContainer,o=t.$previewStatus,s=t.msgLoading,d=t.msgProgress,c=(t.msgSelected,t.previewFileType,parseInt(t.wrapTextLength),t.wrapIndicator,t.previewInitId),p=e.length,f=t.fileTypeSettings,u=w("text",f)?f.text:g.text,v=t.filestack.length,b=function(e,i,n,a){return t.previewDefault(i,n,!0),t.isUploadable?t.showUploadError(e,i,n,a):t.showError(e,i,n,a)};i(0),t.updateFileDetails(p,!1)},updateFileDetails:function(e){var i=this,t=i.msgSelected,n=i.$element,a=i.getFileStack(),r=n.val()||a.length&&a[0].name||"",l=i.slug(r),o=i.isUploadable?a.length:e;e=i.initialPreviewCount+o,log=o>1?t.replace(/\{n\}/g,e):l,i.isError?(i.$previewContainer.removeClass("loading"),i.$previewStatus.html(""),i.$captionContainer.find(".kv-caption-icon").hide(),log=i.msgValidationError):i.showFileIcon(),i.setCaption(log),i.$container.removeClass("file-input-new"),1==arguments.length&&n.trigger("fileselect",[e,l])},change:function(e){var i,t=this,n=t.$element,a=(t.slug(n.val()),0),r=t.$preview,l=arguments.length>1,o=l?e.originalEvent.dataTransfer.files:n.get(0).files,s=(t.msgSelected,h(o)?1:o.length+t.initialPreviewCount,t.filestack.length),d=t.isUploadable&&0!=s,c=function(e,i,n,a){return t.isUploadable?t.showUploadError(e,i,n,a):t.showError(e,i,n,a)};if(t.resetUpload(),t.hideFileIcon(),t.$container.find(".file-drop-zone ."+t.dropZoneTitleClass).remove(),i=l?o:void 0===e.target.files?e.target&&e.target.value?[{name:e.target.value.replace(/^.+\\/,"")}]:[]:e.target.files,h(i)||0===i.length)return d||t.clear(!1),void n.trigger("fileselectnone");
t.resetErrors(),d||r.html(t.overwriteInitial?"":t.initialPreviewContent);var a=t.isUploadable?t.getFileStack().length+i.length:i.length;if(t.maxFileCount>0&&a>t.maxFileCount){var p=t.msgFilesTooMany.replace(/\{m\}/g,t.maxFileCount).replace(/\{n\}/g,a);return t.isError=c(p,null,null,null),t.$captionContainer.find(".kv-caption-icon").hide(),t.$caption.html(t.msgValidationError),void t.$container.removeClass("file-input-new")}t.isIE9?t.updateFileDetails(1):t.readFiles(o),t.reader=null},autoSizeImage:function(e){var i=this,t=i.$preview,n=t.find("#"+e),a=n.find("img");a.length&&a.on("load",function(){var r=n.width(),l=t.width();r>l&&(a.css("width","100%"),n.css("width","97%"));var o=a.closest(".file-preview-frame").find(".file-caption-name");o.length&&(o.width(a.width()),o.attr("title",o.text())),i.$element.trigger("fileimageloaded",e)})},autoSizeCaption:function(){var e=this;0!=e.$caption.length&&e.autoFitCaption&&(e.$caption.css("width",0),setTimeout(function(){var i=e.$captionContainer.width();e.$caption.css("width",.98*i)},100))},setCaption:function(i){var t=this,n=e("<div>"+i+"</div>").text(),a=t.layoutTemplates.icon,r=a+n;0!=t.$caption.length&&(t.$caption.html(r),t.$caption.attr("title",n),t.autoSizeCaption())},initBrowse:function(e){var i=this;i.$btnFile=e.find(".btn-file"),i.$btnFile.append(i.$element)},createContainer:function(){var i=this,t=e(document.createElement("span")).attr({"class":"file-input file-input-new"}).html(i.renderMain());return i.$element.before(t),i.initBrowse(t),t},refreshContainer:function(){var e=this,i=e.$container;i.before(e.$element),i.html(e.renderMain()),e.initBrowse(i)},renderMain:function(){var e=this,i=e.isUploadable&&e.dropZoneEnabled?" file-drop-zone":"",t=e.showPreview?e.getLayoutTemplate("preview").replace(/\{class\}/g,e.previewClass).replace(/\{dropClass\}/g,i):"",n=e.isDisabled?e.captionClass+" file-caption-disabled":e.captionClass,a=e.captionTemplate.replace(/\{class\}/g,n+" kv-fileinput-caption");return e.mainTemplate.replace(/\{class\}/g,e.mainClass).replace(/\{preview\}/g,t).replace(/\{caption\}/g,a).replace(/\{upload\}/g,e.renderUpload()).replace(/\{remove\}/g,e.renderRemove()).replace(/\{cancel\}/g,e.renderCancel()).replace(/\{browse\}/g,e.renderBrowse())},renderBrowse:function(){var e=this,i=e.browseClass+" btn-file",t="";return e.isDisabled&&(t=" disabled "),'<div class="'+i+'"'+t+"> "+e.browseIcon+e.browseLabel+" </div>"},renderRemove:function(){var e=this,i=e.removeClass+" fileinput-remove fileinput-remove-button",t="";return e.showRemove?(e.isDisabled&&(t=" disabled "),'<button type="button" title="'+e.removeTitle+'" class="'+i+'"'+t+">"+e.removeIcon+e.removeLabel+"</button>"):""},renderCancel:function(){var e=this,i=e.cancelClass+" fileinput-cancel fileinput-cancel-button";return e.showCancel?'<button type="button" title="'+e.cancelTitle+'" class="hide '+i+'">'+e.cancelIcon+e.cancelLabel+"</button>":""},renderUpload:function(){var e=this,i=e.uploadClass+" kv-fileinput-upload",t="",n="";return e.showUpload?(e.isDisabled&&(n=" disabled "),t=!e.isUploadable||e.isDisabled?'<button type="submit" title="'+e.uploadTitle+'"class="'+i+'"'+n+">"+e.uploadIcon+e.uploadLabel+"</button>":'<a href="'+e.uploadUrl+'" title="'+e.uploadTitle+'" class="'+i+'"'+n+">"+e.uploadIcon+e.uploadLabel+"</a>"):""}},e.fn.fileinput=function(i){if(n()||t(9)){var a=Array.apply(null,arguments);return a.shift(),this.each(function(){var t=e(this),n=t.data("fileinput"),r="object"==typeof i&&i;n||t.data("fileinput",n=new x(this,e.extend({},e.fn.fileinput.defaults,r,e(this).data()))),"string"==typeof i&&n[i].apply(n,a)})}},e.fn.fileinput.defaults={showCaption:!0,showPreview:!0,showRemove:!0,showUpload:!0,showCancel:!0,autoFitCaption:!0,mainClass:"",previewClass:"",captionClass:"",mainTemplate:null,initialCaption:"",initialPreview:"",initialPreviewCount:0,initialPreviewDelimiter:"*$$*",initialPreviewConfig:[],initialPreviewShowDelete:!0,overwriteInitial:!0,layoutTemplates:p,previewTemplates:u,allowedPreviewTypes:f,allowedPreviewMimeTypes:null,allowedFileTypes:null,allowedFileExtensions:null,previewSettings:v,fileTypeSettings:g,browseLabel:"Browse &hellip;",browseIcon:'<i class="glyphicon glyphicon-folder-open"></i> &nbsp;',browseClass:"btn btn-primary",removeLabel:"Remove",removeTitle:"Clear selected files",removeIcon:'<i class="glyphicon glyphicon-trash"></i> ',removeClass:"btn btn-default",cancelLabel:"Cancel",cancelTitle:"Abort ongoing upload",cancelIcon:'<i class="glyphicon glyphicon-ban-circle"></i> ',cancelClass:"btn btn-default",uploadLabel:"Upload",uploadTitle:"Upload selected files",uploadIcon:'<i class="glyphicon glyphicon-upload"></i> ',uploadClass:"btn btn-default",uploadUrl:null,uploadExtraData:[],uploadAsync:!0,maxFileSize:0,maxFileCount:0,msgSizeTooLarge:'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>. Please retry your upload!',msgFilesTooMany:"Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>. Please retry your upload!",msgFileNotFound:'File "{name}" not found!',msgFileNotReadable:'File "{name}" is not readable.',msgFilePreviewAborted:'File preview aborted for "{name}".',msgFilePreviewError:'An error occurred while reading the file "{name}".',msgInvalidFileType:'Invalid type for file "{name}". Only "{types}" files are supported.',msgInvalidFileExtension:'Invalid extension for file "{name}". Only "{extensions}" files are supported.',msgValidationError:'<span class="text-danger"><i class="glyphicon glyphicon-exclamation-sign"></i> File Upload Error</span>',msgErrorClass:"file-error-message",msgLoading:"Loading  file {index} of {files} &hellip;",msgProgress:"Loading file {index} of {files} - {name} - {percent}% completed.",msgSelected:"{n} files selected",previewFileType:"image",wrapTextLength:250,wrapIndicator:' <span class="wrap-indicator" title="{title}" onclick="{dialog}">[&hellip;]</span>',elCaptionContainer:null,elCaptionText:null,elPreviewContainer:null,elPreviewImage:null,elPreviewStatus:null,elErrorContainer:null,slugCallback:null,dropZoneEnabled:!0,dropZoneTitle:"Drag & drop files here &hellip;",dropZoneTitleClass:"file-drop-zone-title",fileActionSettings:{}},e(document).ready(function(){var i=e("input.file[type=file]"),t=null!=i.attr("type")?i.length:0;t>0&&i.fileinput()}),e.fn.fileinput.Constructor=x}(window.jQuery);