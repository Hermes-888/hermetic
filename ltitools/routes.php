<?php
/**
    restful api calls from javascript
    
*/

// update db table
Route::get('onUpdatePopquiz', 'Hermetic\Ltitools\Controllers\RestApi@onUpdatePopquiz');
Route::get('onGradePopquiz', 'Hermetic\Ltitools\Controllers\RestApi@onGradePopquiz');
Route::get('onUpdateQuizlesson', 'Hermetic\Ltitools\Controllers\RestApi@onUpdateQuizlesson');
Route::get('onGetSubmissions', 'Hermetic\Ltitools\Controllers\RestApi@onGetSubmissions');
