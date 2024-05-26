import { Component } from '@angular/core';

@Component({
  selector: 'app-spelling',
  templateUrl: './spelling.component.html',
  styleUrl: './spelling.component.css'
})
export class SpellingComponent {
  @ViewChild('document_editor')
    public container: DocumentEditorContainerComponent;
    onCreated() {
        //Specifies the language id to map server side dictionary.
        this.container.documentEditor.spellChecker.languageID = 1033;
        this.container.documentEditor.spellChecker.removeUnderline = false;
        this.container.documentEditor.spellChecker.allowSpellCheckAndSuggestion = true;
    }
}
