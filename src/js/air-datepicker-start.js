import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

new AirDatepicker('.modal-book-room__input--date-input', {
    navTitles: {
        days(dp) {
            if (dp.selectedDates.length) {
                let date = dp.selectedDates[0];
                return `<small>
                   Ви вибрали  ${dp.formatDate(date, 'dd.MM.yyyy')}
                </small>`;
            }
            
            return 'Виберіть дату';
        }
    },
    position: 'top center',
    
});

// let dp = new AirDatepicker('.modal-book-room__input--date-input');

// dp.show();


new AirDatepicker('.modal-book-room__input--date-input2', {
    navTitles: {
        days(dp) {
            if (dp.selectedDates.length) {
                let date = dp.selectedDates[0];
                return `<small>
                   Ви вибрали  ${dp.formatDate(date, 'dd.MM.yyyy')}
                </small>`;
            }
            
            return 'Виберіть дату';
        }
    },
    position: 'top center',
});


new AirDatepicker('.booking-table__input--date-input', {
    navTitles: {
        days(dp) {
            if (dp.selectedDates.length) {
                let date = dp.selectedDates[0];
                return `<small>
                   Ви вибрали  ${dp.formatDate(date, 'dd.MM.yyyy')}
                </small>`;
            }
            
            return 'Виберіть дату';
        }
    },
    position: 'top center',
});