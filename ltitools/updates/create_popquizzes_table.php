<?php namespace Hermetic\Ltitools\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreatePopquizzesTable extends Migration
{
    public function up()
    {
        Schema::create('hermetic_ltitools_popquizzes', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');//$this->alias .'_'. $_SESSION['courseID'];
            $table->string('quiz_name');//title
            $table->longText('quiz_description');//user input html
            $table->string('questions');//selected ids
            $table->string('game_style');//
            //$table->longText('custom_css');
            //$table->integer('course_id')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('hermetic_ltitools_popquizzes');
    }
}
