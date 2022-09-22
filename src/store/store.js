import { createStore } from "vuex";


export default createStore({
    state: () => ({
        
        cards: [
            {
                id: 0,
                title: "Allbridge",
                abbreviation: 'ABR',
                logoSrc: 'assets/img/logo.png',
                totalRaise: 500,
                price: 0.32,
                status: "Upcoming",
                idoImg: 'assets/img/ido.png',
                idoType: 'Whitelist',
                distributionNetworksImgs: [
                    'assets/img/btc.png',
                    'assets/img/eth.png',
                    'assets/img/atom.png'
                ],
                startDate: "2021-10-29T16:08",
                endDate: "2021-11-02T13:30",
            },
            {
                id: 1,
                title: "Allbridge",
                abbreviation: 'ABR',
                logoSrc: 'assets/img/logo.png',
                totalRaise: 450,
                price: 0.26,
                status: "Upcoming",
                idoImg: 'assets/img/ido.png',
                idoType: 'Whitelist',
                distributionNetworksImgs: [
                    'assets/img/btc.png',
                    'assets/img/eth.png',
                    'assets/img/atom.png'
                ],
                startDate: "2021-10-31T13:30",
                endDate: "2021-11-02T13:30",
            },
            {
                id: 2,
                title: "Allbridge",
                abbreviation: 'ABR',
                logoSrc: 'assets/img/logo.png',
                totalRaise: 575,
                price: 0.54,
                status: "Upcoming",
                idoImg: 'assets/img/ido.png',
                idoType: 'Whitelist',
                distributionNetworksImgs: [
                    'assets/img/btc.png',
                    'assets/img/eth.png',
                    'assets/img/atom.png'
                ],
                startDate: "2021-10-31T13:30",
                endDate: "2021-11-02T13:30",
            },
            {
                id: 3,
                title: "Allbridge",
                abbreviation: 'ABR',
                logoSrc: 'assets/img/logo.png',
                totalRaise: 500,
                price: 0.32,
                status: "Upcoming",
                idoImg: 'assets/img/ido.png',
                idoType: 'Whitelist',
                distributionNetworksImgs: [
                    'assets/img/btc.png',
                    'assets/img/eth.png',
                    'assets/img/atom.png'
                ],
                startDate: "2021-10-31T13:30",
                endDate: "2021-11-02T13:30",
            },
            {
                id: 4,
                title: "Allbridge",
                abbreviation: 'ABR',
                logoSrc: 'assets/img/logo.png',
                totalRaise: 500,
                price: 0.32,
                status: "Upcoming",
                idoImg: 'assets/img/ido.png',
                idoType: 'Whitelist',
                distributionNetworksImgs: [
                    'assets/img/btc.png',
                    'assets/img/eth.png',
                    'assets/img/atom.png'
                ],
                startDate: "2021-10-31T13:30",
                endDate: "2021-11-02T13:30",
            },
            {
                id: 5,
                title: "Allbridge",
                abbreviation: 'ABR',
                logoSrc: 'assets/img/logo.png',
                totalRaise: 500,
                price: 0.32,
                status: "Upcoming",
                idoImg: 'assets/img/ido.png',
                idoType: 'Whitelist',
                distributionNetworksImgs: [
                    'assets/img/btc.png',
                    'assets/img/eth.png',
                    'assets/img/atom.png'
                ],
                startDate: "2021-10-31T13:30",
                endDate: "2021-11-02T13:30",
            },

        ],
    }),
    getters: {

        cards(state) {
            return state.cards.map((item) => {
                return {
                    ...item,
                    totalRaise: `$${item.totalRaise}K`,
                    price: `$${item.price}`,
                    idoImg: require(`@/${item.idoImg}`),
                    logoSrc: require(`@/${item.logoSrc}`),
                    distributionNetworksImgs: item.distributionNetworksImgs.map(path => require(`@/${path}`))
                }
            })
        },

    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})


