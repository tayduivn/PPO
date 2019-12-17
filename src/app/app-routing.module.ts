import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'beginner', loadChildren: './pages/beginner/beginner.module#BeginnerPageModule', canActivate: [AuthGuard] },
  { path: 'listening-beginner', loadChildren: './pages/beginner/listening-beginner/listening-beginner.module#ListeningBeginnerPageModule' },
  { path: 'topics-grammar1', loadChildren: './pages/beginner/topics-grammar1/topics-grammar1.module#TopicsGrammar1PageModule' },
  { path: 'verb-be', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/verb-be/verb-be.module#VerbBePageModule' },
  { path: 'possessives', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/possessives/possessives.module#PossessivesPageModule' },
  { path: 'topics-vocabulary1', loadChildren: './pages/beginner/topics-vocabulary1/topics-vocabulary1.module#TopicsVocabulary1PageModule' },
  { path: 'numbers', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/numbers/numbers.module#NumbersPageModule' },
  { path: 'reading', loadChildren: './pages/beginner/reading/reading.module#ReadingPageModule' },
  { path: 'text1', loadChildren: './pages/beginner/reading/text1/text1.module#Text1PageModule' },
  { path: 'teste1', loadChildren: './pages/beginner/testess/tests/teste1/teste1.module#Teste1PageModule' },
  { path: 'testess', loadChildren: './pages/beginner/testess/testess.module#TestessPageModule' },
  { path: 'adjectives', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/adjectives/adjectives.module#AdjectivesPageModule' },
  { path: 'imperatives', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/imperatives/imperatives.module#ImperativesPageModule' },
  { path: 'present-simple', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/present-simple/present-simple.module#PresentSimplePageModule' },
  { path: 'word-order', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/word-order/word-order.module#WordOrderPageModule' },
  { path: 'prepositions', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/prepositions/prepositions.module#PrepositionsPageModule' },
  { path: 'frequency', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/frequency/frequency.module#FrequencyPageModule' },
  { path: 'can', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/can/can.module#CanPageModule' },
  { path: 'present-continuous', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/present-continuous/present-continuous.module#PresentContinuousPageModule' },
  { path: 'object-pronouns', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/object-pronouns/object-pronouns.module#ObjectPronounsPageModule' },
  { path: 'past-simple', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/past-simple/past-simple.module#PastSimplePageModule' },
  { path: 'plural', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/plural/plural.module#PluralPageModule' },
  { path: 'countable', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/countable/countable.module#CountablePageModule' },
  { path: 'quantifiers', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/quantifiers/quantifiers.module#QuantifiersPageModule' },
  { path: 'comparatives', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/comparatives/comparatives.module#ComparativesPageModule' },
  { path: 'superlative', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/superlative/superlative.module#SuperlativePageModule' },
  { path: 'be-going', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/be-going/be-going.module#BeGoingPageModule' },
  { path: 'adverbs', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/adverbs/adverbs.module#AdverbsPageModule' },
  { path: 'verbs-infinitive', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/verbs-infinitive/verbs-infinitive.module#VerbsInfinitivePageModule' },
  { path: 'articles', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/articles/articles.module#ArticlesPageModule' },
  { path: 'present-perfect', loadChildren: './pages/topicsGrammar/present-perfect/present-perfect.module#PresentPerfectPageModule' },
  { path: 'present-perfect', loadChildren: './pages/topicsGrammar/present-perfect/present-perfect.module#PresentPerfectPageModule' },
  { path: 'present-perfect', loadChildren: './pages/beginner/topics-grammar1/topicsGrammar1/present-perfect/present-perfect.module#PresentPerfectPageModule' },
  { path: 'days', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/days/days.module#DaysPageModule' },
  { path: 'continents', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/continents/continents.module#ContinentsPageModule' },
  { path: 'text2', loadChildren: './pages/beginner/reading/text2/text2.module#Text2PageModule' },
  { path: 'text3', loadChildren: './pages/beginner/reading/text3/text3.module#Text3PageModule' },
  { path: 'text4', loadChildren: './pages/beginner/reading/text4/text4.module#Text4PageModule' },
  { path: 'text5', loadChildren: './pages/beginner/reading/text5/text5.module#Text5PageModule' },
  { path: 'text6', loadChildren: './pages/beginner/reading/text6/text6.module#Text6PageModule' },
  { path: 'text7', loadChildren: './pages/beginner/reading/text7/text7.module#Text7PageModule' },
  { path: 'text8', loadChildren: './pages/beginner/reading/text8/text8.module#Text8PageModule' },
  { path: 'text9', loadChildren: './pages/beginner/reading/text9/text9.module#Text9PageModule' },
  { path: 'text10', loadChildren: './pages/beginner/reading/text10/text10.module#Text10PageModule' },
  { path: 'jobs', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/jobs/jobs.module#JobsPageModule' },
  { path: 'activities', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/activities/activities.module#ActivitiesPageModule' },
  { path: 'food', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/food/food.module#FoodPageModule' },
  { path: 'things', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/things/things.module#ThingsPageModule' },
  { path: 'adjectives', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/adjectives/adjectives.module#AdjectivesPageModule' },
  { path: 'adjective', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/adjective/adjective.module#AdjectivePageModule' },
  { path: 'teste-nivelamento', loadChildren: './pages/teste-nivelamento/teste-nivelamento.module#TesteNivelamentoPageModule' },
  { path: 'testvoc', loadChildren: './pages/beginner/testess/tests/testvoc/testvoc.module#TestvocPageModule' },
  { path: 'test-listening', loadChildren: './pages/beginner/testess/tests/test-listening/test-listening.module#TestListeningPageModule' },
  { path: 'pre-intermediate', loadChildren: './pages/pre-intermediate/pre-intermediate.module#PreIntermediatePageModule' },
  { path: 'grammar-list', loadChildren: './pages/pre-intermediate/grammar-list/grammar-list.module#GrammarListPageModule' },
  { path: 'word-order', loadChildren: './pages/pre-intermediate/grammar-list/word-order/word-order.module#WordOrderPageModule' },
  { path: 'order-word', loadChildren: './pages/pre-intermediate/grammar-list/order-word/order-word.module#OrderWordPageModule' },
  { path: 'time-sequencers', loadChildren: './pages/pre-intermediate/grammar-list/time-sequencers/time-sequencers.module#TimeSequencersPageModule' },
  { path: 'relative-clauses', loadChildren: './pages/pre-intermediate/grammar-list/relative-clauses/relative-clauses.module#RelativeClausesPageModule' },
  { path: 'something', loadChildren: './pages/pre-intermediate/grammar-list/something/something.module#SomethingPageModule' },
  { path: 'infinitive', loadChildren: './pages/pre-intermediate/grammar-list/infinitive/infinitive.module#InfinitivePageModule' },
  { path: 'gerund', loadChildren: './pages/pre-intermediate/grammar-list/gerund/gerund.module#GerundPageModule' },
  { path: 'haveto', loadChildren: './pages/pre-intermediate/grammar-list/haveto/haveto.module#HavetoPageModule' },
  { path: 'should', loadChildren: './pages/pre-intermediate/grammar-list/should/should.module#ShouldPageModule' },
  { path: 'conditional1', loadChildren: './pages/pre-intermediate/grammar-list/conditional1/conditional1.module#Conditional1PageModule' },
  { path: 'possessive-pronouns', loadChildren: './pages/pre-intermediate/grammar-list/possessive-pronouns/possessive-pronouns.module#PossessivePronounsPageModule' },
  { path: 'conditional2', loadChildren: './pages/pre-intermediate/grammar-list/conditional2/conditional2.module#Conditional2PageModule' },
  { path: 'passive', loadChildren: './pages/pre-intermediate/grammar-list/passive/passive.module#PassivePageModule' },
  { path: 'usedto', loadChildren: './pages/pre-intermediate/grammar-list/usedto/usedto.module#UsedtoPageModule' },
  { path: 'might', loadChildren: './pages/pre-intermediate/grammar-list/might/might.module#MightPageModule' },
  { path: 'expmovement', loadChildren: './pages/pre-intermediate/grammar-list/expmovement/expmovement.module#ExpmovementPageModule' },
  { path: 'order-phrasal', loadChildren: './pages/pre-intermediate/grammar-list/order-phrasal/order-phrasal.module#OrderPhrasalPageModule' },
  { path: 'neither', loadChildren: './pages/pre-intermediate/grammar-list/neither/neither.module#NeitherPageModule' },
  { path: 'past-perfect', loadChildren: './pages/pre-intermediate/grammar-list/past-perfect/past-perfect.module#PastPerfectPageModule' },
  { path: 'reported-speech', loadChildren: './pages/pre-intermediate/grammar-list/reported-speech/reported-speech.module#ReportedSpeechPageModule' },
  { path: 'reading-list', loadChildren: './pages/pre-intermediate/reading-list/reading-list.module#ReadingListPageModule' },
  { path: 'text11', loadChildren: './pages/pre-intermediate/reading-list/text11/text11.module#Text11PageModule' },
  { path: 'text12', loadChildren: './pages/pre-intermediate/reading-list/text12/text12.module#Text12PageModule' },
  { path: 'text13', loadChildren: './pages/pre-intermediate/reading-list/text13/text13.module#Text13PageModule' },
  { path: 'text14', loadChildren: './pages/pre-intermediate/reading-list/text14/text14.module#Text14PageModule' },
  { path: 'text15', loadChildren: './pages/pre-intermediate/reading-list/text15/text15.module#Text15PageModule' },
  { path: 'text16', loadChildren: './pages/pre-intermediate/reading-list/text16/text16.module#Text16PageModule' },
  { path: 'text17', loadChildren: './pages/pre-intermediate/reading-list/text17/text17.module#Text17PageModule' },
  { path: 'text18', loadChildren: './pages/pre-intermediate/reading-list/text18/text18.module#Text18PageModule' },
  { path: 'text19', loadChildren: './pages/pre-intermediate/reading-list/text19/text19.module#Text19PageModule' },
  { path: 'text20', loadChildren: './pages/pre-intermediate/reading-list/text20/text20.module#Text20PageModule' },
  { path: 'vocabulary-list', loadChildren: './pages/pre-intermediate/vocabulary-list/vocabulary-list.module#VocabularyListPageModule' },
  { path: 'intermediate', loadChildren: './pages/intermediate/intermediate.module#IntermediatePageModule' },
  { path: 'upper-intermediate', loadChildren: './pages/upper-intermediate/upper-intermediate.module#UpperIntermediatePageModule' },
  { path: 'housework', loadChildren: './pages/pre-intermediate/vocabulary-list/housework/housework.module#HouseworkPageModule' },
  { path: 'animals', loadChildren: './pages/pre-intermediate/vocabulary-list/animals/animals.module#AnimalsPageModule' },
  { path: 'expressing-movement', loadChildren: './pages/pre-intermediate/vocabulary-list/expressing-movement/expressing-movement.module#ExpressingMovementPageModule' },
  { path: 'grammar-list1', loadChildren: './pages/intermediate/grammar-list1/grammar-list1.module#GrammarList1PageModule' },
  { path: 'action-verbs', loadChildren: './pages/intermediate/grammar-list1/action-verbs/action-verbs.module#ActionVerbsPageModule' },
  { path: 'future-forms', loadChildren: './pages/intermediate/grammar-list1/future-forms/future-forms.module#FutureFormsPageModule' },
  { path: 'reading1', loadChildren: './pages/intermediate/reading1/reading1.module#Reading1PageModule' },
  { path: 'present-xpast', loadChildren: './pages/intermediate/grammar-list1/present-xpast/present-xpast.module#PresentXpastPageModule' },
  { path: 'present-perfectcontinuous', loadChildren: './pages/intermediate/grammar-list1/present-perfectcontinuous/present-perfectcontinuous.module#PresentPerfectcontinuousPageModule' },
  { path: 'text21', loadChildren: './pages/intermediate/reading1/text21/text21.module#Text21PageModule' },
  { path: 'text22', loadChildren: './pages/intermediate/reading1/text22/text22.module#Text22PageModule' },
  { path: 'text23', loadChildren: './pages/intermediate/reading1/text23/text23.module#Text23PageModule' },
  { path: 'text24', loadChildren: './pages/intermediate/reading1/text24/text24.module#Text24PageModule' },
  { path: 'text25', loadChildren: './pages/intermediate/reading1/text25/text25.module#Text25PageModule' },
  { path: 'text26', loadChildren: './pages/intermediate/reading1/text26/text26.module#Text26PageModule' },
  { path: 'text27', loadChildren: './pages/intermediate/reading1/text27/text27.module#Text27PageModule' },
  { path: 'text28', loadChildren: './pages/intermediate/reading1/text28/text28.module#Text28PageModule' },
  { path: 'text29', loadChildren: './pages/intermediate/reading1/text29/text29.module#Text29PageModule' },
  { path: 'text30', loadChildren: './pages/intermediate/reading1/text30/text30.module#Text30PageModule' },
  { path: 'reading2', loadChildren: './pages/upper-intermediate/reading2/reading2.module#Reading2PageModule' },
  { path: 'text31', loadChildren: './pages/upper-intermediate/reading2/text31/text31.module#Text31PageModule' },
  { path: 'text32', loadChildren: './pages/upper-intermediate/reading2/text32/text32.module#Text32PageModule' },
  { path: 'text33', loadChildren: './pages/upper-intermediate/reading2/text33/text33.module#Text33PageModule' },
  { path: 'text34', loadChildren: './pages/upper-intermediate/reading2/text34/text34.module#Text34PageModule' },
  { path: 'text35', loadChildren: './pages/upper-intermediate/reading2/text35/text35.module#Text35PageModule' },
  { path: 'text36', loadChildren: './pages/upper-intermediate/reading2/text36/text36.module#Text36PageModule' },
  { path: 'text37', loadChildren: './pages/upper-intermediate/reading2/text37/text37.module#Text37PageModule' },
  { path: 'text38', loadChildren: './pages/upper-intermediate/reading2/text38/text38.module#Text38PageModule' },
  { path: 'text39', loadChildren: './pages/upper-intermediate/reading2/text39/text39.module#Text39PageModule' },
  { path: 'text40', loadChildren: './pages/upper-intermediate/reading2/text40/text40.module#Text40PageModule' },
  { path: 'listening-pre-intermediate', loadChildren: './pages/pre-intermediate/listening-pre-intermediate/listening-pre-intermediate.module#ListeningPreIntermediatePageModule' },
  { path: 'listening-intermediate', loadChildren: './pages/intermediate/listening-intermediate/listening-intermediate.module#ListeningIntermediatePageModule' },
  { path: 'listening-upper-intermediate', loadChildren: './pages/upper-intermediate/listening-upper-intermediate/listening-upper-intermediate.module#ListeningUpperIntermediatePageModule' },
  { path: 'language-popover', loadChildren: './pages/language-popover/language-popover.module#LanguagePopoverPageModule' },
  { path: 'test-traducao', loadChildren: './pages/test-traducao/test-traducao.module#TestTraducaoPageModule' },  { path: 'places', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/places/places.module#PlacesPageModule' },
  { path: 'house', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/house/house.module#HousePageModule' },
  { path: 'family', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/family/family.module#FamilyPageModule' },
  { path: 'weather', loadChildren: './pages/beginner/topics-vocabulary1/topicsVocabulary1/weather/weather.module#WeatherPageModule' },
  { path: 'teste2', loadChildren: './pages/beginner/testess/tests/teste2/teste2.module#Teste2PageModule' },
  { path: 'testvoc1', loadChildren: './pages/beginner/testess/tests/testvoc1/testvoc1.module#Testvoc1PageModule' },
  { path: 'test-listening2', loadChildren: './pages/beginner/testess/tests/test-listening2/test-listening2.module#TestListening2PageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }