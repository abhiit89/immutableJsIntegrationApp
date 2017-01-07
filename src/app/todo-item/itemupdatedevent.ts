/**
 * Created by neo on 7/1/17.
 */
interface ItemUpdatedEvent {
  itemId: string;
  text?: string;
  completed?: boolean;
}

export default ItemUpdatedEvent;
