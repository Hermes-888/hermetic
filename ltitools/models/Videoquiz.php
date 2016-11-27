<?php namespace Hermetic\Ltitools\Models;

use Model;

/**
 * videoquiz Model
 */
class Videoquiz extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'hermetic_ltitools_videoquizzes';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = ['*'];
    //protected $jsonable = ['player'];//configuration
    //protected $jsonable = ['cuedata'];//reconstruct markers

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