<?php namespace Hermetic\Ltitools\Models;

use Model;

/**
 * popquiz Model
 */
class Popquiz extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'hermetic_ltitools_popquizzes';

    /**
     * @var game_style dropdown
     */
    public function getGameStyleOptions()
    {
        return ['mgs' => 'Millionaire Game Show', 'ygt' => 'You Got This', 'gsc' => 'Gameshow Challenge'];
    }
    
    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = ['*'];

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