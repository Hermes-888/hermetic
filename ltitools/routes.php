<?php
/**
    restful api calls from javascript
    
*/

// update db table
Route::get('onUpdatePopquiz', 'Hermetic\Ltitools\Controllers\RestApi@onUpdatePopquiz');
Route::get('onGradePopquiz', 'Hermetic\Ltitools\Controllers\RestApi@onGradePopquiz');
