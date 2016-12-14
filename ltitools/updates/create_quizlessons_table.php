<?php
namespace Hermetic\Ltitools\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateQuizlessonsTable extends Migration
{

    public function up()
    {
        if ( !Schema::hasTable('hermetic_ltitools_quizlessons') )
        {
            Schema::create('hermetic_ltitools_quizlessons', function($table)
            {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->string('name');
                $table->string('quiz_name');
                $table->string('quiz_id');
                $table->string('questions_used',255);
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        Schema::dropIfExists('hermetic_ltitools_quizlessons');
    }

}
