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
import App from './App.vue';
import About from './pages/About.vue';
import Home from './pages/Home.vue';
import Team from './pages/Team.vue';
import Contacts from './pages/Contacts.vue';
import ServicesPage from './pages/SercivesPage.vue';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
// read about Toast https://github.com/Maronato/vue-toastification

let locale;

const router = createRouter({
  history: createWebHistory(),
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

createApp(App).use(router).use(Toast).mount('#app');
