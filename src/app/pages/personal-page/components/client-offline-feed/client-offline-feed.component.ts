import {Component, Input, OnInit} from '@angular/core';
import {Feed, User} from "../../../../models/types/user";
import {take} from "rxjs";
import {GraphqlService} from "../../../../helpers/services/graphql.service";
import {FeedTypeEnum} from "../../../../models/enums/feedType-enum";

@Component({
  selector: 'comp-client-offline-feed',
  templateUrl: './client-offline-feed.component.html',
  styleUrls: ['./client-offline-feed.component.scss']
})
export class ClientOfflineFeedComponent implements OnInit {

  FeedTypeEnum = FeedTypeEnum

  public clientFeed?: Feed

  public allFeedQuantity!: number

  @Input() public user!: User

  constructor(
    private graphqlService: GraphqlService,
  ) { }

  ngOnInit(): void {
    this.getFeed()
  }

  private getFeed(): void {
    this.graphqlService.getItemClientFeed({id: this.user.id})
      .pipe(take(1))
      .subscribe(({data}) => {
        this.clientFeed = data.getItemClient.feed
        this.allFeedQuantity = Number(data.getItemClient.feed?.carbohydrates)
          + Number(data.getItemClient.feed?.fat)
          + Number(data.getItemClient.feed?.protein)
        console.log(this.clientFeed)
      })
  }

}
