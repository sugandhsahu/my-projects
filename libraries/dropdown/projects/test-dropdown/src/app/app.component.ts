import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  data;
 selected =  ["007923959165", "641712484995", "694167054625"];
  ngOnInit() {
    this.data = [
      {
        id: '007923959165',
        label: 'Guardian(007923959165)'
      },
      {
        id: '641712484995',
        label: 'FINALYZER BeyondSquare(641712484995)'
      },
      {
        id: '694167054625',
        label: '{Empty}(694167054625)'
      },
      {
        id: '375981988755',
        label: 'Rocketium(375981988755)'
      },
      {
        id: '477190085016',
        label: 'LCEC Poc(477190085016)'
      },
      {
        id: '624222673746',
        label: '{Empty}(624222673746)'
      },
      {
        id: '819692781571',
        label: 'Prod-Dev(819692781571)'
      },
      {
        id: '724518154870',
        label: 'VKL Seasoning(724518154870)'
      },
      {
        id: '437010792566',
        label: '{Empty}(437010792566)'
      },
      {
        id: '695540305333',
        label: 'IL_PPCAWS023(695540305333)'
      },
      {
        id: '692038143615',
        label: 'Apollo Munich(692038143615)'
      },
      {
        id: '590808406886',
        label: 'SIDSSOL Hosting(590808406886)'
      },
      {
        id: '093382705961',
        label: 'LCEC PDF Maker(093382705961)'
      },
      {
        id: '270043492926',
        label: '{Empty}(270043492926)'
      },
      {
        id: '817669084887',
        label: 'Network Operations(817669084887)'
      },
      {
        id: '075062118208',
        label: 'CISAWSCECV01(075062118208)'
      },
      {
        id: '517158350818',
        label: '{Empty}(517158350818)'
      },
      {
        id: '264532840154',
        label: '{Empty}(264532840154)'
      },
      {
        id: '004482201220',
        label: 'Retailwhizz(004482201220)'
      },
      {
        id: '365875056168',
        label: '{Empty}(365875056168)'
      },
      {
        id: '540755332897',
        label: 'Akbar Travel(540755332897)'
      },
      {
        id: '826141500539',
        label: 'Encriss(826141500539)'
      },
      {
        id: '164100448210',
        label: 'Sujit_Arulanandam@infosys(164100448210)'
      },
      {
        id: '444647034166',
        label: 'IL_PPCAWS022(444647034166)'
      },
      {
        id: '341531098156',
        label: 'Absolute Data(341531098156)'
      },
      {
        id: '861725398231',
        label: '{Empty}(861725398231)'
      },
      {
        id: '443944534115',
        label: '{Empty}(443944534115)'
      },
      {
        id: '450247146926',
        label: 'TT_AWS_CloudShell@infosys(450247146926)'
      },
      {
        id: '302221335784',
        label: 'Motilal Oswal(302221335784)'
      },
      {
        id: '199323099656',
        label: 'aws.gtbank@alepo.com(199323099656)'
      },
      {
        id: '243965126402',
        label: 'BLS International(243965126402)'
      },
      {
        id: '832139353826',
        label: 'Vatsana Technologies Private Limited(832139353826)'
      },
      {
        id: '684717675262',
        label: 'AHWL(684717675262)'
      },
      {
        id: '951915267654',
        label: '{Empty}(951915267654)'
      },
      {
        id: '075293846647',
        label: '{Empty}(075293846647)'
      },
      {
        id: '590716298683',
        label: '{Empty}(590716298683)'
      },
      {
        id: '041897332683',
        label: 'Vinimay Developers Pvt Ltd(041897332683)'
      },
      {
        id: '327719353454',
        label: 'VLCCBIPOC(327719353454)'
      },
      {
        id: '332676393802',
        label: 'Sapphire Foods(332676393802)'
      },
      {
        id: '562297298194',
        label: 'Path InfoTech(562297298194)'
      },
      {
        id: '990560079376',
        label: 'CISAWSPFIZ01(990560079376)'
      },
      {
        id: '377723228305',
        label: 'PISPL(377723228305)'
      },
      {
        id: '678728144735',
        label: 'spice poc(678728144735)'
      },
      {
        id: '900620163274',
        label: 'anand.ramani@alepo.com(900620163274)'
      },
      {
        id: '415323318679',
        label: 'Progressive India(415323318679)'
      },
      {
        id: '102126005642',
        label: 'Compare InfoBase(102126005642)'
      },
      {
        id: '382226615092',
        label: 'IL_Enterprise_PPC-AWS-CCD-INTEG(382226615092)'
      },
      {
        id: '266842320073',
        label: 'Infosys McCamish Systems LLC(266842320073)'
      },
      {
        id: '514288212540',
        label: 'IL_PPCAWS030(514288212540)'
      },
      {
        id: '361784780090',
        label: '{Empty}(361784780090)'
      },
      {
        id: '475897685281',
        label: '{Empty}(475897685281)'
      },
      {
        id: '274304159946',
        label: 'Progressive Development(274304159946)'
      },
      {
        id: '271351134209',
        label: 'JagatJeet(271351134209)'
      },
      {
        id: '968450988190',
        label: '{Empty}(968450988190)'
      },
      {
        id: '652620812385',
        label: 'Anand Patwardhan(652620812385)'
      },
      {
        id: '806730268978',
        label: 'Vibes Health Care(806730268978)'
      },
      {
        id: '612212069832',
        label: 'Cropin(612212069832)'
      }
    ];
  }

  dropDownChange($event) {
    console.log($event);
  }
}
