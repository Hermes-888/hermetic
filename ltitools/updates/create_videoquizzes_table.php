<?php namespace Hermetic\Ltitools\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateVideoquizzesTable extends Migration
{
    public function up()
    {
        Schema::create('hermetic_ltitools_videoquizzes', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');//$this->alias .'_'. $_SESSION['courseID'];
            $table->string('player');//configration & video path
            $table->longText('cuedata');//reconstruct markers
            $table->string('quiz_id');//selected quiz id
            $table->string('questions');//selected ids
            //$table->longText('custom_css');
            //$table->integer('course_id')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('hermetic_ltitools_videoquizzes');
    }
}
