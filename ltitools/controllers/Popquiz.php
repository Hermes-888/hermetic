<?php namespace Hermetic\Ltitools\Controllers;

use Flash;
use BackendMenu;
use Backend\Classes\Controller;

/**
 * Popquiz Back-end Controller
 */
class Popquiz extends Controller
{
    public $implement = [
        'Backend.Behaviors.FormController',
        'Backend.Behaviors.ListController'
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('Hermetic.Ltitools', 'ltitools', 'popquiz');
        //BackendMenu::setContext('Delphinium.Roots', 'delphinium', ucfirst{{lowerPlugin}});
    }
    
    public function index()
    {
        $this->listRefresh();
        $this->bodyClass = 'compact-container';
    }
    
    /**
     * Delete checked instances.
     * called from /controllers/list_toolbar.htm Remove button
     */

    public function index_onDelete()
    {
        if (($checkedIds = post('checked')) && is_array($checkedIds) && count($checkedIds)) {

            foreach ($checkedIds as $id) {
                if (!$obj = MyModel::find($id)) continue;
                $obj->delete();
            }

            Flash::success("Successfully deleted");
        }
        else {
            Flash::error("An error occurred when trying to delete the selected item");
        }

        return $this->listRefresh();

    }
}