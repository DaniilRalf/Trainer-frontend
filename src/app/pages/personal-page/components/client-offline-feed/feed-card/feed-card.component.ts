import {Component, Input, OnInit} from '@angular/core';
import {FeedTypeEnum} from "../../../../../models/enums/feedType-enum";

@Component({
  selector: 'el-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {

  public length!: number

  public feedDescription!: string

  @Input() feedType!: FeedTypeEnum

  @Input() value?: string

  @Input() color!: string

  @Input() allFeedQuantity!: number

  constructor() {
  }

  ngOnInit(): void {
    this.length = (Number(this.value) * 100) / this.allFeedQuantity

    if (this.feedType === FeedTypeEnum.fat) {
      this.feedDescription = 'Жиры являются важным источником энергии и помогают усваивать ' +
        'некоторые витамины. Однако рекомендуется ограничивать потребление насыщенных и трансжиров, ' +
        'которые могут быть вредными для здоровья. Вместо этого, ' +
        'предпочтение следует отдавать полиненасыщенным жирам, ' +
        'таким как оливковое масло, авокадо, орехи, семена и рыба, богатая Омега-3 жирными кислотами.'
    } else if (this.feedType === FeedTypeEnum.protein) {
      this.feedDescription = 'Белки играют важную роль в росте и восстановлении мышц, поэтому их ' +
        'потребление особенно важно для активных фитнес-занятий. Рекомендуется употреблять около ' +
        '1-1,5 г белка на 1 кг веса тела в течение дня. Источниками белка могут быть мясо, птица, ' +
        'рыба, молочные продукты, яйца, тофу и другие продукты растительного происхождения.'
    } else if (this.feedType === FeedTypeEnum.carbohydrates) {
      this.feedDescription = 'Углеводы являются основным источником энергии для организма. ' +
        'Важно выбирать качественные и комплексные углеводы, такие как фрукты, овощи, ' +
        'цельнозерновые продукты и бобовые. Эти продукты обеспечивают постепенное высвобождение ' +
        'энергии и содержат важные питательные вещества и волокна.'
    }
  }

}
