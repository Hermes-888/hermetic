<?php namespace Hermetic\Ltitools;

use Event;
use Backend;
use System\Classes\PluginBase;

/**
 * ltitools Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Use Roots to API
     */
    public $require = [
        'Delphinium.Roots'
    ];
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'ltitools',
            'description' => 'Tools to present quizzes',
            'author'      => 'hermetic',
            'icon'        => 'icon-cogs'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {
        Event::listen('backend.menu.extendItems', function($manager) {
            $manager->addSideMenuItems('Hermetic.Ltitools', 'ltitools', [
                'Popquiz' => [
                  'label' => 'PopQuiz',
                  'icon'  => 'icon-thumbs-o-up',
                  'owner' => 'Hermetic.Ltitools',
                  'group' => 'QuizTools',
                  'url' => Backend::url('hermetic/ltitools/popquiz')
                ],
                'Videoquiz' => [
                  'label' => 'VideoQuiz',
                  'icon'  => 'icon-thumbs-o-up',
                  'owner' => 'Hermetic.Ltitools',
                  'group' => 'QuizTools',
                  'url' => Backend::url('hermetic/ltitools/videoquiz')
                ],
                'Testcompo' => [
                  'label' => 'TestComponent',
                  'icon'  => 'icon-thumbs-o-down',
                  'owner' => 'Hermetic.Ltitools',
                  'group' => 'QuizTools',
                  'url' => Backend::url('hermetic/ltitools/testcompo')
                ]
            ]);
        });
    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            'Hermetic\Ltitools\Components\Popquiz' => 'PopQuiz',
            'Hermetic\Ltitools\Components\Videoquiz' => 'VideoQuiz'
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array UNUSED
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate
        return [
            'hermetic.ltitools.some_permission' => [
                'tab' => 'ltitools',
                'label' => 'Some permission'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array UNUSED
     */
    public function registerNavigation()
    {
        return []; // Remove this line to activate
        return [
            'ltitools' => [
                'label'       => 'ltitools',
                'url'         => Backend::url('hermetic/ltitools/popquiz'),
                'icon'        => 'icon-thumbs-o-up',
                'permissions' => ['hermetic.ltitools.*'],
                'order'       => 500,
            ],
        ];
    }

}
