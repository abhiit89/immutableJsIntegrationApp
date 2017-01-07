import {TodoItem as TodoItemModel} from "./../todo-item";
import ItemUpdatedEvent from "./itemupdatedevent";
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

  editMode = false;

  @Input()
  item: TodoItemModel;

  @Output()
  done = new EventEmitter<string>();

  @Output()
  itemUpdated = new EventEmitter<ItemUpdatedEvent>();

  doneClicked() {
    this.done.emit(this.item.uuid);
  }

  toggle() {
    this.itemUpdated.emit({
      itemId: this.item.uuid,
      completed: !this.item.completed
    });
  }

  enterEditMode(element: HTMLInputElement) {
    this.editMode = true;
    if (this.editMode) {
      setTimeout(() => { element.focus(); }, 0);
    }
  }

  cancelEdit(element: HTMLInputElement) {
    this.editMode = false;
    element.value = this.item.text;
  }

  commitEdit(updatedText: string) {
    this.editMode = false;
    this.itemUpdated.emit({
      itemId: this.item.uuid,
      text: updatedText
    });
  }
}
