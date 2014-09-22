function OpenIntroductionWizardDialog() {
var dialogSP = null;
var dialogUrl =  '../_layouts/CentralSiteManager/IntroductionWizard.aspx';
var dialogOptions = {
                url: dialogUrl,
                title: 'Configuration wizard',
                allowMaximize: true,
                showClose:true,
                dialogReturnValueCallback: function (dialogResult) {
                    location.reload(true);
                }
};
if (SP.UI.ModalDialog.showModalDialog) {
    SP.UI.ModalDialog.showModalDialog(dialogOptions);
} else {
    dialogSP = SP.UI.ModalDialog.commonModalDialogOpen(dialogUrl, dialogOptions, null, {});
}

}