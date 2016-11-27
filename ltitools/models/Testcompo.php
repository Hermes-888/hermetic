<?php
namespace Hermetic\Ltitools\Models;

use Model;

/**
 * testcompo Model
 */
class Testcompo extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'hermetic_ltitools_testcompos';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = ['name','animate','size','custom_css];

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