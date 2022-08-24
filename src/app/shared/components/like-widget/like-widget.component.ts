import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit {
  constructor(private uniqueIdService: UniqueIdService) {}

  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;

  fonts = {
    faThumbsUp,
  };

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }
}
