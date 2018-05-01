export class AppareilService {

    appareils = [
        {
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            name: 'Télévision',
            status: 'éteint'
        },
        {
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];

    switchOnAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }

    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
    }
    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
    }
}
