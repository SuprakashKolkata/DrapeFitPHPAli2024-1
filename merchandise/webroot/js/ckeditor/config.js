/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
 CKEDITOR.config.allowedContent = true;
 // Define changes to default configuration here.
 // For the complete reference:
 // http://docs.ckeditor.com/#!/api/CKEDITOR.config

 // The toolbar groups arrangement, optimized for two toolbar rows.
 //var filePath = '/Demo/darling-elves_dev/';
 // var filePath = 'http://localhost/kenyan-voice/';
 var filePath = 'https://www.drapefit.com/';
 config.filebrowserBrowseUrl = filePath + 'js/kcfinder/browse.php?type=files';
 config.filebrowserImageBrowseUrl = filePath + 'js/kcfinder/browse.php?type=images';
 config.filebrowserFlashBrowseUrl = filePath + 'js/kcfinder/browse.php?type=flash';
 config.filebrowserUploadUrl = filePath + 'js/kcfinder/upload.php?type=files';
 config.filebrowserImageUploadUrl = filePath + 'js/kcfinder/upload.php?type=images';
 config.filebrowserFlashUploadUrl = filePath + 'js/kcfinder/upload.php?type=flash';

 config.toolbarGroups = [
  {name: 'clipboard', groups: ['clipboard', 'undo']},
  {name: 'editing', groups: ['find', 'selection', 'spellchecker']},
  {name: 'links'},
  {name: 'insert'},
  {name: 'forms'},
  {name: 'tools'},
  {name: 'document', groups: ['mode', 'document', 'doctools']},
  {name: 'others'},
  '/',
  {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
  {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
  {name: 'styles'},
  {name: 'colors'},
  {name: 'about'}
 ];


 // Remove some buttons, provided by the standard plugins, which we don't
 // need to have in the Standard(s) toolbar.
 config.removeButtons = 'Underline,Subscript,Superscript';

 // Se the most common block elements.
 config.format_tags = 'p;h1;h2;h3;pre';

 // Make dialogs simpler.
 config.removeDialogTabs = 'image:advanced;link:advanced';
};
