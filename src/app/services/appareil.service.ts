export class AppareilService {

    appareils = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Télévision',
            status: 'éteint'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];


    getAppareilById(id: number) {
        return this.appareils.find(appareilObject => appareilObject.id === id);
    }

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

