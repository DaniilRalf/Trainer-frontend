import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public faqList: {question: string, answer: string}[] = [
    {
      question: 'При занятиях офлайн зал оплачивается отдельно?',
      answer: 'Да, абонемент в тренажерный зал оплачивается отдельно. Из стоимость можно узнать у меня.'
    },
    {
      question: 'Что с собой нужно взять на первое занятие в тренажерном зале?',
      answer: 'Для занятий необходимы: спортивная форма, сменная обувь (кроссовки), бутылка для воды (зал оснащен кулерами), полотенце (если приобретете абонемент без ограничения по времени, то 1 полотенце будет входить в стоимость), ванные принадлежности (в зале есть душ и сауна), резинка для волос.'
    },
    {
      question: 'Нужен ли инвентарь для домашних тренировок?',
      answer: 'Для всех будет нужен коврик и спортивная форма. Индивидуально, в зависимости от целей и опыта оговариваем остальной инвентарь: мячик для МФР, ролик для МФР, амортизаторы, гантели.'
    },
    {
      question: 'Входит ли в оплату занятий в зале или онлайн рацион питания?',
      answer: 'Контроль питания входит (отчеты в приложении для подсчета КБЖУ), но рацион питания (с прописанным рецептами и граммовками) – это отдельная услуга, она приобретается отдельно.'
    },
    {
      question: 'Происходит ли контроль формы при занятиях в зале и в онлайне?',
      answer: 'Да, каждый месяц необходимо делать фото, замеры и взвешиваться.'
    },
    {
      question: 'Если я в другом городе, могу ли я у тебя заниматься?',
      answer: 'Да! Для таких случаев есть онлайн-занятия и дистанционное ведение.'
    },
    {
      question: 'Когда я получу доступ в личный кабинет?',
      answer: 'В течение первой недели занятий.'
    },
    {
      question: 'Что я могу найти в личном кабинете?',
      answer: 'Можно отследить свои результаты. После каждого отчета по форме я буду вносить данные в ваш личный кабинет. Можно сделать и посмотреть коллажи с фото “ДО/ПОСЛЕ”, увидеть расписание ваших тренировок, и какая тренировка вас ждет. А также прочитать рекомендации по питанию, и ваш индивидуальный калораж.'
    },
    {
      question: 'Что происходит с тренировкой, если я заболела?',
      answer: 'В пакет тренировок на 1 месяц входит 12 занятий, но оплату я принимаю 1 раз в календарный месяц. За этот период вы успеете посетить 13-14 занятий. Эти дополнительные занятия я не учитываю, как раз они и остаются на случай болезни. Но если вы болеете дольше 1 недели, следующая оплата переноситься на срок вашей болезни.'
    },
    {
      question: 'Что делать, если я вынуждена пропустить тренировку по личным обстоятельства?',
      answer: 'Нужно предупредить меня об этом как можно раньше в личной переписке.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
