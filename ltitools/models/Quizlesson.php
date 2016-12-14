<?php
namespace Hermetic\Ltitools\Models;

use Model;

/**
 * Quizlesson Model
 */
class Quizlesson extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'hermetic_ltitools_quizlessons';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = ['name','quiz_name','quiz_id'];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

}