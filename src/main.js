//                           #(,*
//                            #%(,                                 .%,/*
//                           ./&&%#(/                           ,.#&%#(*
//                           *(.&%//                           *(&##//*
//                          /**#&%% /                          &&##(/*
//             #            / %&&%%/                         *%%%%.               #%#*(*
//            /(#%         (((&&&%(                      *(##%&&%((            %%#(/*
//            (*#%&&         #&&&&%    /%&&&&&&&&&&&&#,    .&&&&%..,,       (%%%(//
//            /,/#%&&%     (/#&&&&@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&%**/,     %%&%((**.
//              */((%%&&&*.(&&&@@@@@@@&@@@@@@@@@@@@@@%%@@@@@@&&&&#* .#%%%%%%%#(/.,
//   .          .  */#%&&@@@@@@&@@%&@@@@@@@@@@&@@@@@@#@@@&&@&&&&&&&%%%%%%##//**,.
// *//(#%%&&#     */**((%@&@@@@@.,%&@@@@@%&&@&@&@@&@@@@&&(.,#@@%&%%%((((((.//
//      /((##%&&&&&&&&&&&&@@@@&@&&&&@@@@@@@%@@@@@&@%@@@@&&##%&%@&&%###%%%%&&&&&&%%%%%##%#/
//        /( *(##%%&&&&%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&&&&%%##(##%%%%%%#///((.*
//           /(*(,#( ###&@@@@@@@@@@@@&&##&&&&&&@@&&%%%&&&%%%%%%%%%%#////(((/(.. .
//              . , ,///.&&@&&&&&%&%%%%%%%%%%%%%###################*/* , ,/
//                    .   ,%%%%%%#######(((((((((((((((((((((((##**.  .
//                              ,(((((((((//////////////////,
//                               %%#((((////********////((((
//                          *%&&&&&%#(((///**********///(((##
//                     #%&@@@@@&&%##(((///*************//(((##/
//                   %&&@@&&&%#(    ((//***,,,....,,,,****/((###(
//                  %&&&@&%(           **,,,........,,,,**///((####*
//                  %@@&%/             *####(/*****,*****///(((##%##(
//                 (&@&&#/           /###((/.        .,,   .*/((#%%%#/
//                 %&@@&%(         /###((*                    .*#%&&#/*
//                %&&@%%%%/      *####(.                       (#%&&####/.
//             *%&&&&&&%##%%    (###(/                        (#%%%%(/(##((,
//           #&#%&%  %%(      *#%%#(*                        #%%%&%%#(*/((((/.
//         (   &&    %%     ,(####(*                           #&%#%%((#//((((/.
//           #,      .    /(#####((,                            &#  (%(,*#///(((/.
//                      *(####(#(((/                                  *(***/**///((/,
//                    /(/,/#(,((* .*                                    **./*,,/((* .,*.
//                  ,,  *#(, /#*                                            **    ./,
//                     /*   ./.                                              ..

import { createApp } from 'vue';
import 'maz-ui/css/main.css';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';
import { createHead } from '@vueuse/head'
import App from './App.vue';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
// read about Toast https://github.com/Maronato/vue-toastification

const Home = () => import('./pages/Home.vue');
const About = () => import( './pages/About.vue');
const Team = () => import( './pages/Team.vue');
const Contacts = () => import('./pages/Contacts.vue');
const ServicesPage = () => import('./pages/ServicesPage.vue');


let locale;

const head = createHead();

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  base: "https://dent-in.com.ua/",
  routes: [
    { path: '/', redirect: '/uk/' },
    {
      path: '/:locale/',
      name: 'home',
      component: Home,
      props: { locale: locale },
    },
    { path: '/:locale/about', name: 'about', component: About },
    { path: '/:locale/team', name: 'team', component: Team },
    { path: '/:locale/contacts', name: 'contacts', component: Contacts },
    { path: '/:locale/services', name: 'services', component: ServicesPage },
  ],
});

createApp(App).use(router).use(Toast).use(head).mount('#app');
