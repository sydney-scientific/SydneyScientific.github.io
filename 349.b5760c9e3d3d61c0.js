"use strict";(self.webpackChunksydney_scientific_www=self.webpackChunksydney_scientific_www||[]).push([[349],{1349:(c,i,a)=>{a.r(i),a.d(i,{OpenQuestionsModule:()=>l});var r=a(9808),s=a(5675),e=a(5e3);const u=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-open-questions"]],decls:117,vars:0,consts:[[1,"main",2,"margin-top","5em"],[1,"mat-h1"],["id","maybe-drink",1,"mat-h1"],["id","approach",1,"mat-h2"],["type","1"],["id","go-further"],["start","5","type","1"],["id","generalise"],["id","deliverables",1,"mat-h2"],["id","data-science-topics",1,"mat-h2"],["id","natural-language-processing-nlp"],["id","web-scraping"],["id","multivariate-regression"],[1,"mat-h2"]],template:function(t,h){1&t&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2,"Fun little project"),e.qZA(),e._uU(3," Or, instead of tackling the 'open questions' which are more relevant to my PhD, could have a bit of fun with: "),e.TgZ(4,"h1",2),e._uU(5,"Maybe drink"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"/What are the chances"),e.qZA(),e.TgZ(8,"h2",3),e._uU(9,"Approach"),e.qZA(),e.TgZ(10,"ol",4)(11,"li"),e._uU(12,"Take a map dataset"),e.qZA(),e.TgZ(13,"li"),e._uU(14,"Look for all coffee shops (or whatever) [and maybe population densities]"),e.qZA(),e.TgZ(15,"li"),e._uU(16,"Remove all coffee shops"),e.qZA(),e.TgZ(17,"li"),e._uU(18,"Based on population densities in zoning rules, infer if there is a coffeeshop"),e.qZA()(),e.TgZ(19,"h3",5),e._uU(20,"Go further"),e.qZA(),e.TgZ(21,"ol",6)(22,"li"),e._uU(23,"Search for coffee"),e.qZA(),e.TgZ(24,"li"),e._uU(25,"Build an app"),e.qZA(),e.TgZ(26,"li"),e._uU(27,"As you\u2019re walking/driving along, it\u2019ll buzz and say \u201cthere probably a coffeeshop within 20 meters. 88.42% coffeeshop; 70% grocery shop\u201d "),e.qZA()(),e.TgZ(28,"h3",7),e._uU(29,"Generalise"),e.qZA(),e.TgZ(30,"p"),e._uU(31,"Actually let\u2019s generalise to specifying a single drink you care about. Now it\u2019s a find-me Lemonade app. Or a find-me Kombucha app."),e.qZA(),e.TgZ(32,"h2",8),e._uU(33,"Deliverables"),e.qZA(),e.TgZ(34,"p"),e._uU(35,"In the course will build:"),e.qZA(),e.TgZ(36,"ol")(37,"li"),e._uU(38,"Fully functional neural network with a location->amenity dataset"),e.qZA(),e.TgZ(39,"li"),e._uU(40,"Fully functional mobile app"),e.qZA(),e.TgZ(41,"li"),e._uU(42,"Hacked-together scraper to quickly categorise a coffeeshop, but also include a simple NN for this task, to cluster keywords (for later search) "),e.qZA(),e.TgZ(43,"li"),e._uU(44,"Near-realtime integration with the map and the mobile\u2019s GPS"),e.qZA()(),e.TgZ(45,"h2",9),e._uU(46,"Data science topics"),e.qZA(),e.TgZ(47,"h3",10),e._uU(48,"Natural Language Processing (NLP)"),e.qZA(),e.TgZ(49,"ul")(50,"li"),e._uU(51,"NLP to categorise [disambiguate] drink based on country, e.g.: lemonade in Australia generally doesn\u2019t refer to alcoholic beverages, whereas in America it does. "),e.qZA()(),e.TgZ(52,"h3",11),e._uU(53,"Web scraping"),e.qZA(),e.TgZ(54,"ul")(55,"li"),e._uU(56,"Given an OSM location, get the homepage, parse out the "),e.TgZ(57,"code"),e._uU(58,"<head>"),e.qZA(),e._uU(59," and keyword search the body "),e.qZA()(),e.TgZ(60,"h3",12),e._uU(61,"Multivariate regression"),e.qZA(),e.TgZ(62,"ul")(63,"li"),e._uU(64,"Given a group of candidate stores, choose one most likely to have desired beverage"),e.qZA()(),e._UZ(65,"hr"),e.TgZ(66,"h1",1),e._uU(67,"Open questions"),e.qZA(),e.TgZ(68,"p"),e._uU(69,"There are a few machine-learning research questions that I'm trying to solve in the short-term."),e.qZA(),e.TgZ(70,"h2",13),e._uU(71,"Multivariate regression across medical images and patient records"),e.qZA(),e.TgZ(72,"h4"),e._uU(73,"Idea 0"),e.qZA(),e.TgZ(74,"p"),e._uU(75,"I was thinking that have a worker neural network doing the heavy lifting (maybe 3-5 NN all up) would do the trick. To keep epochs manageable, was thinking about the Meta-Learning and One-Shot Learning literature. But maybe that wouldn't work?"),e.qZA(),e.TgZ(76,"p"),e._uU(77,"Here is an excerpt from an email I sent to an AI expert recently:"),e.qZA(),e.TgZ(78,"blockquote")(79,"p"),e._uU(80,"Hey so was thinking, if you have a secondary neural network for optimising the first neural network, couldn't you encode say image data in one, and patient data in another?"),e.qZA(),e.TgZ(81,"p"),e._uU(82,"Regularly we use multivariate regression\u2014potentially via neural networking\u2014on patient data to infer trends. For the problems I work on, these are risk factors for developing blindness-causing diseases."),e.qZA(),e.TgZ(83,"p"),e._uU(84,"On the image side, I have a bunch of health and unhealthy images, and am currently just working out how to segment the classification correctly (more of the time). But it is longitudinal data, so could always combine it with information helping it say: these are healthy images for a patient that will become unhealthy."),e.qZA(),e.TgZ(85,"p"),e._uU(86,"On the text side, I have general demographic information like gender, age, ethnicity and a few more specific [to glaucoma] metrics."),e.qZA(),e.TgZ(87,"p"),e._uU(88,"How would you combine these two datasets? - Such that given a new person walking off the street, we can emit one number saying their probability of going blind in next k years (assuming no intervention)."),e.qZA(),e.TgZ(89,"em"),e._uU(90,"[multivariate regression over images and numerical patient data]"),e.qZA()(),e.TgZ(91,"h4"),e._uU(92,"Idea 1"),e.qZA(),e.TgZ(93,"p"),e._uU(94,"Or maybe adding an extra channel to a convolutional neural network?"),e.qZA(),e.TgZ(95,"p"),e._uU(96,"Encode the patient data in a hidden channel. Maybe figure out encoding with spatial relevant, or just hack specialised code for that last channel."),e.qZA(),e.TgZ(97,"h4"),e._uU(98,"Idea 2"),e.qZA(),e.TgZ(99,"p"),e._uU(100,"Jiquan Ngiam, Aditya Khosla, Mingyu Kim, Juhan Nam, Honglak Lee, and Andrew Y. Ng. 2011. Multimodal deep learning. In Proceedings of the 28th International Conference on International Conference on Machine Learning (ICML'11), Lise Getoor and Tobias Scheffer (Eds.). Omnipress, USA, 689-696."),e.qZA(),e.TgZ(101,"h2",13),e._uU(102,"Expand existing glaucoma AI"),e.qZA(),e._uU(103," Current Glaucoma CNN works on a non-public dataset (the "),e.TgZ(104,"em"),e._uU(105,"Blue Mountains Eye Study"),e.qZA(),e._uU(106,"). "),e.TgZ(107,"h3"),e._uU(108,"Idea 0: Transfer learning"),e.qZA(),e.TgZ(109,"h3"),e._uU(110,"Idea 1: Incorporate public glaucoma datasets"),e.qZA(),e.TgZ(111,"h3"),e._uU(112,"Idea 2: Incorporate NN for optic disc segmenetation"),e.qZA(),e._uU(113," Sevastopolsky A., Optic disc and cup segmentation methods for glaucoma detection with modification of U-Net convolutional neural network, Pattern Recognition and Image Analysis 27 (2017), no. 3, 618\u2013624. "),e.TgZ(114,"h3"),e._uU(115,"Idea 3: Expand classifications to include Diabetic Retinopathy"),e.qZA(),e._uU(116," See Kaggle competition open-source solutions for concepts + datasets.\n"),e.qZA())},styles:[".main[_ngcontent-%COMP%]{padding:0 3em}@media (max-width: 720px){.main[_ngcontent-%COMP%]{padding:0 .5em}}blockquote[_ngcontent-%COMP%]{padding:0 22px;font-size:1.25rem;color:#616161;border-left:2px solid #e0e0e0;margin-bottom:1.143rem}blockquote[_ngcontent-%COMP%]{margin:0 0 1rem}"]}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,s.Bz,s.Bz.forChild(u)]]}),n})()}}]);